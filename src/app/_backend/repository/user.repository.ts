'use server'
import { eq } from "drizzle-orm";
import { db } from "../database";
import { userTable } from "../database/schema/user.schema";

export default async function userRepository() {

    return {
        async findOneUser(username: string) {
            const userFound = await db.select().from(userTable).where(eq(userTable.username, username))
            return userFound[0] || null
        },
        async getAllUsers() {
            return await db.select().from(userTable)
        },
        async getLoggedInUser(id: string) {
            const userFound = await db.select().from(userTable).where(eq(userTable.id, parseInt(id)))
            return userFound[0] || null
        }
    }
}



