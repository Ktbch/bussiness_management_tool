import { db } from "../database"
import { productTable } from "../database/schema/product.schema"
import { orderTable } from "../database/schema/sales-order.schema"
import { NewSalesOrder } from "../database/schema/types"
import { eq } from "drizzle-orm"

export default function salesOrderRepository() {
    return {
        async createOrder(newSalesOrder: NewSalesOrder) {
            try {
                const order = await db.insert(orderTable).values(newSalesOrder).returning()
                return order[0] || null
            } catch (error) {
                throw error
            }
        },
        async getAllOrders(page: number = 0) {
            try {
                const limit = 4
                const offSet = page * limit
                const orders = await db.select().from(orderTable).limit(limit).offset(offSet)
                return orders
            } catch (error) {
                throw error
            }
        },
        async balanceProduct(productSold: string, quantity: number) {
            try {
                const findProduct = await db.select().from(productTable).where(eq(productTable.productName, productSold))
                if (!findProduct[0]) {
                    console.log('this product does not exist')
                    return 'this product does not exist'
                }
                const newQuantity = parseInt(findProduct[0].productQuantity) - quantity
                const databaseFreindlyQuantity = JSON.stringify(newQuantity)
                await db.update(productTable).set({ ...findProduct[0], productQuantity: databaseFreindlyQuantity }).where(eq(productTable.productName, findProduct[0].productName))
            } catch (error) {

                throw error
            }
        }
        // async updateOrder(salesOrder: NewSalesOrder) {
        //     try {
        //         const order = await db.insert(orderTable).values(newSalesOrder).returning()
        //         return order[0] || null
        //     } catch (error) {
        //         throw error
        //     }
        // },
        // async createOrder(newSalesOrder: NewSalesOrder) {
        //     try {
        //         const order = await db.insert(orderTable).values(newSalesOrder).returning()
        //         return order[0] || null
        //     } catch (error) {
        //         throw error
        //     }
        // }
    }
}
