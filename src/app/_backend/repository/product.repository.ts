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

type TActionConfig = 'insert' | 'select' | 'update' | 'delete'
// TODO implement this also
// const dbQuery = async (action: 'insert' | 'select', table: PgTableWithColumns<any>, value: any) => {
//     return await db[action](table).values(value)
// }

export default async function productRepository() {
    return {
        async createProducts(product: NewProduct) {
            try {
                const createdProduct = await db.insert(productTable).values(product).returning()
                return createdProduct
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
        async updateProduct(product: Product) {
            try {
                const updatedProduct = await db.update(productTable).set(product).where(eq(productTable.id, product.id)).returning()
                return updatedProduct
            } catch (error) {
                throw error
            }
        },
        async deleteProduct(id: number) {
            try {
                const deletedProduct = await db.delete(productTable).where(eq(productTable.id, id)).returning()
                return deletedProduct
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







