CREATE TABLE IF NOT EXISTS "sales_order_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"productName" text NOT NULL,
	"productPrice" text NOT NULL,
	"productQuantity" text NOT NULL,
	"productDescription" text,
	"status" "status",
	"createdAt" timestamp
);
