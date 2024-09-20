import { pgEnum, pgTable, serial, text } from "drizzle-orm/pg-core";

const category = pgEnum('catgoryEnum', ['new', 'old', 'semi-old'])

export const productTable = pgTable('product_table', {
    id: serial('id').primaryKey(),
    productName: text('productName').notNull(),
    productPrice: text('productPrice').notNull(),
    productQuantity: text('productQuantity').notNull(),
    productDescription: text('productDescription').notNull(),
    productSku: text('SKU').notNull(),
    // category: category('new')
})