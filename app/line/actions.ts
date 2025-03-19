"use server" // Server Action ( Only run on the server )

import { error } from "console";
import { db } from "../db/db" // Import Drizzle ORM instance
import { new_line } from "../db/schema" // Import the new line table schema

// POST: Save a new line to PostgresSQL
export async function saveNewLine(formData:FormData) {

    // Extract user input from form data
    const country = formData.get("country") as string;
    const site = formData.get("site") as string;
    const area = formData.get("area") as string;
    const processCell = formData.get("processCell") as string;
    const hostName = formData.get("hostName") as string;
    const hardware = formData.get("hardware") as string;
    const dataAccessAdGroup = formData.get("dataAccessAdGroup") as string;
    const localSystemManagerAdGroup = formData.get("localSystemManagerAdGroup") as string;

    // TODO: Validation need to be changed: https://zod.dev
    // Validate input: Ensure are fields are filled
    if( !country || !site || !area || !processCell || !hostName || !hardware || !dataAccessAdGroup || !localSystemManagerAdGroup ){
        return{ error: " All fields are required! "}
    }

    try{
        // Insert user data into PostgreSQL using Drizzle ORM
        await db.insert(new_line).values({
            country, 
            site, 
            area, 
            processCell, 
            hostName, 
            hardware, 
            dataAccessAdGroup, 
            localSystemManagerAdGroup})
        
        return{success: "New line added successfully!"} // Return a success message
    }
    catch(error){
        return{error: "Error saving new line."}
    }
}
    // GET: Retieve all new lines from database
export async function getNewLines() {
        try{
            // Fetch all new lines from database
            return await db.select().from(new_line)
        }
        catch(error){
            return[]
        }
        
}

