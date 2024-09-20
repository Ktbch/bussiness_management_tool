'use server'

import productRepository from "../../repository/product.repository"

const { } = productRepository()
// make this more type safe

export default async function productData(page: string) {
    const { getAllProducts } = await productRepository()
    try {
        const products = await getAllProducts(parseInt(page))
        return products
    } catch (error) {
        throw error
    }
}
