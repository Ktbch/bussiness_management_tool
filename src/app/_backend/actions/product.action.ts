'use server'

import { FormState } from "@/app/(frontend)/design-system/_components/form-components/types";
import { createProductSchema } from "@/app/lib/zod-schema";
import productRepository from "../repository/product.repository";
import { Socket } from 'socket.io'



export default async function productActions() {
    return {
        async createProduct(state: FormState, formData: FormData) {

            const { createProducts } = await productRepository()
            // const server = new Socket()
            try {
                const validatedFields = createProductSchema.safeParse({
                    productName: formData.get('productName'),
                    productPrice: formData.get('productPrice'),
                    productQuantity: formData.get('productQuantity'),
                    productDescription: formData.get('productDescription'),
                    productSku: formData.get('productSku'),
                })
                if (!validatedFields.error) {
                    await createProducts(validatedFields.data)

                    return {
                        message: { successMessage: 'product created succesfully' }
                    }
                }
                return {
                    errors: validatedFields.error.flatten().fieldErrors
                }
            } catch (error) {
                throw error
            }
        },

        async deleteProduct(id: number) {
            const { deleteProduct } = await productRepository()
            if (!id) return 'identifier is needed'
            await deleteProduct(id)
            return 'succesfully deleted'
        }
    }
}



export async function createProduct(state: FormState, formData: FormData) {
    const { createProducts } = await productRepository()
    try {
        const validatedFields = createProductSchema.safeParse({
            productName: formData.get('productName'),
            productPrice: formData.get('productPrice'),
            productQuantity: formData.get('productQuantity'),
            productSku: formData.get('productSku'),
        })
        if (!validatedFields.error) {
            const result = await createProducts(validatedFields.data)
            return {
                message: { successMessage: result }
            }
        }
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    } catch (error) {
        throw error
    }
}

export async function updateProduct(state: FormState, formData: FormData, id?: number) {
    const { updateProduct } = await productRepository()
    try {
        const validatedFields = createProductSchema.safeParse({
            productName: formData.get('productName'),
            productPrice: formData.get('productPrice'),
            productQuantity: formData.get('productQuantity'),
            productStockStatus: formData.get('productStockStatus'),
            productSku: formData.get('productSku'),
        })

        console.log(validatedFields.data?.productStockStatus)
        if (!validatedFields.error) {
            await updateProduct(validatedFields.data)
            return {
                message: { successMessage: 'product created succesfully' }
            }
        }
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    } catch (error) {
        throw error
    }
}

export async function deleteProduct(id: number) {
    try {
        const { deleteProduct } = await productRepository()
        if (!id) return 'an identifier is needed'
        await deleteProduct(id)
        return 'product sucessfully deleted'
    } catch (error) {
        throw error
    }

}