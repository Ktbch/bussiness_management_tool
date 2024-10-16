import { db } from "../database"
import { productTable } from "../database/schema/product.schema"
import { orderTable } from "../database/schema/sales-order.schema"
import { NewSalesOrder, Product, SalesOrder } from "../database/schema/types"
import { eq } from "drizzle-orm"


// the problem i want to solve i don't want an order to be created when an a product does not exist.
//
interface IUpdateOrder {
    id?: number;
    productSold?: string;
    quantitySold?: string;
    price?: string;
    discount?: string | null;
    status?: "paid" | "unpaid" | null;
}

export default function salesOrderRepository() {
    return {
        name: 'kayode',
        async balanceProduct(product: Product[], quantity: string) {
            try {
                // TODO WHY NOT CHANGE THE DATABASE QUANTITY TYPE TO INTERGER
                const newQuantity = parseInt(product[0].productQuantity) - parseInt(quantity)
                const databaseFreindlyQuantity = JSON.stringify(newQuantity)
                await db.update(productTable).set({ ...product[0], productQuantity: databaseFreindlyQuantity }).where(eq(productTable.productName, product[0].productName))

                console.log('updated')
            } catch (error) {
                throw error
            }
        },

        async createOrder(newSalesOrder: NewSalesOrder) {
            try {
                const productExist = await db.select().from(productTable).where(eq(productTable.productName, newSalesOrder.productSold))

                console.log(productExist[0])
                if (!productExist[0]) return 'product does not exist'
                if (productExist[0].productQuantity < newSalesOrder.quantitySold) return 'you can sell more than quantity avaliable'

                const order = await db.insert(orderTable).values(newSalesOrder).returning()

                const newQuantity = parseInt(productExist[0].productQuantity) - parseInt(order[0].quantitySold)
                const databaseFreindlyQuantity = JSON.stringify(newQuantity)
                console.log(databaseFreindlyQuantity)

                await db.update(productTable).set({ ...productExist[0], productQuantity: databaseFreindlyQuantity }).where(eq(productTable.productName, productExist[0].productName))

                // console.log('updated')

                return 'order created succesfully'

            } catch (error) {
                throw error
            }
        },

        async getAllOrders(page: number = 0) {
            try {
                const limit = 4
                const offSet = page * limit

                const orders = (await db.select().from(orderTable).limit(limit).offset(offSet)).toSorted((a, b) => a.id - b.id)
                return orders

            } catch (error) {
                throw error
            }
        },

        async getOrderByID(id: number) {
            try {
                const orderFound = await db.select().from(orderTable).where(eq(orderTable.id, id))
                return orderFound[0]
            } catch (error) {
                throw error
            }
        },
        async deleteOrdersRepository(id: number) {
            const orderFound = await db.select().from(orderTable).where(eq(orderTable.id, id))
            if (!orderFound) return 'order does not exist'

            const deletedOrder = await db.delete(orderTable).where(eq(orderTable.id, orderFound[0].id)).returning()
            return deletedOrder
        },

        async updateOrderRepository(salesOrder: IUpdateOrder) {
            try {
                //  TODO IMPROVE THIS LOGIC

                const orderFound = await db.select().from(orderTable).where(eq(orderTable.id, salesOrder.id!))
                if (!orderFound[0]) return 'order does not exist'
                const updatedOrder = await db.update(orderTable).set(salesOrder).where(eq(orderTable.id, orderFound[0].id))
                return 'updated succesfully'
            } catch (error) {
                throw error
            }
        },
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
