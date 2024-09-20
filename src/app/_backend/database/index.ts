import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// for migrations

const connectionString = process.env.connection_string
// for query purposes
const queryClient = postgres(connectionString!);

export const db = drizzle(queryClient);