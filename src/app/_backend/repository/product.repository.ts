'use server'

import { db } from '../database'
import { productTable } from '../database/schema/product.schema'
import { NewProduct, Product } from '../database/schema/types'
import { eq } from 'drizzle-orm'


// TODO IMPLEMENT TABLE CONFIG INTERFACE
// interface ITableConfig {

//     name: "product_table";
//     schema: undefined;
//     columns: {
//         id: PgColumn < {
//             name: "id";
//             tableName: "product_table";
//             dataType: "number";
//             columnType: "PgSerial";
//             data: number;
//             driverParam: number;
//             notNull: true;
//             ... 6 more ...;
//             generated: undefined;
//         }, {}, {} >;
//         productSku: PgColumn <...>;
//     };
//     dialect: "pg";
// }

// type TActionConfig = 'insert' | 'select' | 'update' | 'delete'
// TODO implement this also
// const dbQuery = async (action: 'insert' | 'select', table: PgTableWithColumns<any>, value: any) => {
//     return await db[action](table).values(value)
// }


type TStockStatus = "full stock" | "average stock" | "out of stock" | "low stock" | undefined


const toggleStatus = (quantity: number, lowStockCount: number, highStockCount: number): TStockStatus => {
    switch (true) {
        case (quantity > 0) && quantity <= lowStockCount:
            return 'low stock'
        case (quantity > lowStockCount && quantity <= highStockCount):
            return 'average stock'
        case (quantity > highStockCount):
            return 'full stock'
        case (quantity === 0):
            return 'out of stock'
        default:
            return undefined

    }

}

export default async function productRepository() {
    const lowStockCount = 50
    const highStockCount = 100
    return {
        async createProducts(product: NewProduct) {
            // const lowStockCount = 50
            // const highStockCount = 100
            try {
                const productExists = await db.select().from(productTable).where(eq(productTable.productName, product.productName))

                console.log(productExists)
                if (productExists[0]) return 'product already exists'

                await db.insert(productTable).values({ ...product, productStockStatus: toggleStatus(parseInt(product.productQuantity), lowStockCount, highStockCount) })
                return 'product created succesfully'

            } catch (error) {
                throw error
            }
        },
        async getAllProducts(page: number = 0) {
            try {

                const limit = 4
                const offSet = page * limit

                //   TODO
                const allProductsLenght = (await db.select().from(productTable)).length
                const allProducts = await db.select().from(productTable).limit(limit).offset(offSet)

                return { allProducts, allProductsLenght }
            } catch (error) {
                throw error
            }

        },
        //  TODO WORK ON THE UPDATE
        async updateProduct(product: Product) {
            try {
                const updatedProduct = await db.update(productTable).set({ ...product, productStockStatus: toggleStatus(parseInt(product.productQuantity), lowStockCount, highStockCount) }).where(eq(productTable.id, product.id)).returning()
                return updatedProduct
            } catch (error) {
                throw error
            }
        },
        async deleteProduct(id: number) {
            try {
                const deletedProduct = await db.delete(productTable).where(eq(productTable.id, id)).returning()
                return deletedProduct[0]
            } catch (error) {
                throw error
            }
        }
    }
}

//   TODO
// Create Product
// Update Product
//  delte Prosuct

//  view newy created producr







