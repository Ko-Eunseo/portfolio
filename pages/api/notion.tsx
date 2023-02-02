// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "./notionApi";
import { NotionDataRow } from "@/types/types";

export const notionSecret = process.env.NOTION_SECRET;
export const notionDatabaseId = process.env.NOTION_DATABASE_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Missing notion secret or database id.");

  const query = await getData(notionSecret, notionDatabaseId);
  // @ts-ignore
  const rows = query.results.map((res) => res.properties) as NotionDataRow[];
  const rowsStructured: rowsStructured = rows.map((row) => ({
    title: row.title.title[0].text.content,
    subtitle: row.subtitle.rich_text[0]?.plain_text,
    content: row.content.rich_text[0]?.text?.content,
    subContent: row.subContent.rich_text[0]?.text?.content,
    url: row.url.url,
    tags: row.tags.multi_select[0].name,
    period: row.period.rich_text[0]?.text?.content,
    // image: row.image.rich_text[0]?.text?.content,
    team: row.team.rich_text[0]?.text?.content,
  }));
  res.status(200).json(rowsStructured);
}
