import { Client } from "@notionhq/client";

export const getData = async (notionSecret: string, databaseId: string) => {
  const notion = new Client({
    auth: notionSecret,
  });
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response;
};

export const getPage = async (notionSecret: string, pageId: string) => {
  const notion = new Client({
    auth: notionSecret,
  });
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (notionSecret: string, blockId: string) => {
  const notion = new Client({
    auth: notionSecret,
  });
  const response = await notion.blocks.retrieve({
    block_id: blockId,
  });
  return response;
};
