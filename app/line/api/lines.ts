/* 'use client'
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/app/db/db";
import { new_line } from "@/app/db/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    
    if (req.method === 'POST') {
        const { country, site, area, processCell, hostName, hardware, dataAccessAdGroup, localSystemManagerAdGroup } = req.body;

        try {
            // Insert data into the database
            await db.insert(new_line).values({
                country,
                site,
                area,
                processCell,
                hostName,
                hardware,
                dataAccessAdGroup,
                localSystemManagerAdGroup,
            });

            res.status(200).json({ message: 'Line information saved successfully.' });
        } catch (error) {
            console.error('Database insert error:', error);
            res.status(500).json({ error: 'Failed to save line information.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
} */