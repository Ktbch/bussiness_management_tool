import { pgEnum, pgTable, serial, text } from "drizzle-orm/pg-core";

// const category = pgEnum('catgoryEnum', ['new', 'old', 'semi-old'])

export const stockStatusEnum = pgEnum('productStockStatus', ['full stock', 'average stock', 'out of stock', 'low stock'])

export const productTable = pgTable('product_table', {
    id: serial('id').primaryKey(),
    productName: text('productName').notNull().unique(),
    productPrice: text('productPrice').notNull(),
    productQuantity: text('productQuantity').notNull(),
    productStockStatus: stockStatusEnum('productStockStatus'),
    productSku: text('SKU').notNull(),
    // category: category('new')
})