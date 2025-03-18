
// Run the test, making sure inserting in db is working correct:
// npx ts-node -r tsconfig-paths/register app/test/testDbInsertion.ts

import { new_line } from '@/app/db/schema';
// connect to database
// Database client instalisation

import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "@/app/db/schema"
import postgres from "postgres";
import "dotenv/config"

require("tsconfig-paths/register");
// Create PostgreSQL client
const client = postgres(process.env.DATABASE_URL as string, {debug: (connection, query, params) => {
    console.log(query, params)
  }
})
// Initialize Drizzle ORM
export const db = drizzle(client, {schema, logger: true}) // Passing client and schema


// Insert in db for testing
async function testInsertion() {
    const newLine = {
      country: "Denmark",
      site: "Søborg",
      area: "area",
      processCell: "process cell",
      hostName: "host name",
      hardware: "hardware",
      dataAccessAdGroup: "data access group",
      localSystemManagerAdGroup: "local system",
    };
  
    try {
      await db.insert(new_line).values(newLine);
      console.log("New line is created");
    } catch (error) {
      console.error("Error inserting new line:", error);
    }
  }
  
  testInsertion();