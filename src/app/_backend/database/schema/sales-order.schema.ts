import { pgTable, serial, text, pgEnum } from "drizzle-orm/pg-core";

export enum Status {
    paid = 'paid',
    unPaid = 'unpaid'
}

// export function enumToPgEnum<T extends Record<string, any>>(
//     myEnum: T,
// ): [T[keyof T], ...T[keyof T][]] {
//     return Object.values(myEnum).map((value: any) => `${value}`) as any
// }

export const statusEnum = pgEnum('status', ['paid', 'unpaid'])

export const orderTable = pgTable('sales_order_table', {
    id: serial('id').primaryKey(),
    productSold: text('productName').notNull(),
    quantitySold: text('productPrice').notNull(),
    price: text('productQuantity').notNull(),
    discount: text('productDescription'),
    status: statusEnum('status'),
    // createdAt: timestamp('createdAt').defaultNow()
})