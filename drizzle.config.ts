import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "postgresql",
    schema: "./src/app/_backend/database/schema/*",
    out: "./drizzle",
    dbCredentials: {
        url: process.env.connection_string!
    }
});
