DO $$ BEGIN
 CREATE TYPE "public"."productStockStatus" AS ENUM('full stock', 'average stock', 'out of stock');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('paid', 'unpaid');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"productName" text NOT NULL,
	"productPrice" text NOT NULL,
	"productQuantity" text NOT NULL,
	"productStockStatus" "productStockStatus",
	"SKU" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sales_order_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"productName" text NOT NULL,
	"productPrice" text NOT NULL,
	"productQuantity" text NOT NULL,
	"productDescription" text,
	"status" "status"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL
);
