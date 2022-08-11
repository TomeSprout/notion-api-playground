import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import { type } from "os";

dotenv.config();

const databaseID: string = process.env.NOTION_DATABASE_ID as string;

async function main() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const { results } = await notion.databases.query({
    database_id: databaseID,
    filter: {
      property: 'Favorites',
      checkbox: {
        equals: true,
      }
    },
  });

  const fav = results.map((page: any) => {
    console.log(page.properties.Name);
  })

}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
