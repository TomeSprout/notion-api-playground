import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const databaseID: string = process.env.NOTION_DATABASE_ID as string;

async function main() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const response = await notion.databases.query({
    database_id: databaseID,
  });

  console.log("Got response:", response);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
