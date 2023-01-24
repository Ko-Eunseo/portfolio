// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecret,
});

type Row = {
  github_url: { id: string; url: string | null };
  content: {
    id: string;
    rich_text: { text: { content: string | undefined } }[];
  };
  tags: { id: string; multi_select: { name: { content: string } }[] };
  title: { id: string; title: { text: { content: string } }[] };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Missing notion secret or database id.");

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  // @ts-ignore
  const rows = query.results.map((res) => res.properties) as Row[];
  // console.log(query.results.map((res) => res.id));
  const rowsStructured: rowsStructured = rows.map((row) => ({
    title: row.title.title[0].text.content,
    content: row.content.rich_text[0]?.text?.content,
    github_url: row.github_url.url,
    tags: row.tags.multi_select[0].name,
  }));
  res.status(200).json(rowsStructured);
}
