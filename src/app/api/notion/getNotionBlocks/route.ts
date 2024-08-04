// app/api/notion/getNotionBlocks/route.ts

//uses the Notion Client to return a different block structure
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const pageId = searchParams.get('pageId');
  const data = pageId && await notion.getPage(pageId);
  return new Response(JSON.stringify(data));
}

