CREATE TABLE IF NOT EXISTS "product_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"productName" text NOT NULL,
	"productPrice" text NOT NULL,
	"productQuantity" text NOT NULL,
	"productDescription" text NOT NULL,
	"SKU" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL
);
