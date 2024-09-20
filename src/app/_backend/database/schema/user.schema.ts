
import { pgTable, serial, text } from "drizzle-orm/pg-core";


export const userTable = pgTable('user_table', {
    id: serial('id').primaryKey(),
    username: text('username').notNull(),
    password: text('password').notNull(),
})