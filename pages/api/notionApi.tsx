import { Client } from "@notionhq/client";
const notionSecret = process.env.NOTION_SECRET;

export const getData = async () => {
  const notion = new Client({
    auth: notionSecret,
  });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });
  return response;
};

export const getPage = async (pageId: string) => {
  const notion = new Client({
    auth: notionSecret,
  });
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const notion = new Client({
    auth: notionSecret,
  });
  const response = await notion.blocks.retrieve({
    block_id: blockId,
  });
  return response;
};

// export const getPostContent = async (id: string) => {
//   const notion = new Client({
//     auth: notionSecret,
//   });
//   const baseQuery = {
//     block_id: id,
//     page_size: 100,
//   };
//   let results = [];
//   let postContent = await notion.blocks.children.list(baseQuery);
//   results = [...postContent.results];
//   while (postContent.has_more) {
//     postContent = await notion.blocks.children.list({
//       ...baseQuery,
//       start_cursor: postContent.next_cursor,
//     });
//     results = [...results, ...postContent.results];
//   }
//   return results;
// };

// export async function getStaticProps(context: GetStaticPropsContext) {
//   // Grab the slug from the post URL
//   const slug = context.params && context.params.slug;
//   // Get all posts from the Notion database
//   const posts = await getData();
//   // Find the post with a matching slug property
//   const matchedPost = posts.filter((post) => {
//     if (post && post.properties && post.properties.slug) {
//       return post.properties.slug.rich_text?.[0].plain_text === slug;
//     }
//   })[0];
//   // Get the Notion page data and all child block data
//   const [postData, postContent] = await Promise.all([
//     getPage(matchedPost.id),
//     getPostContent(matchedPost.id),
//   ]);
//   // Next.js passes the data to my React template for rendering
//   return {
//     props: {
//       postId: matchedPost.id,
//       postData,
//       postContent,
//     },
//     revalidate: 60,
//   };
// }
