'use server'

import { FormState } from "@/app/(frontend)/design-system/_components/form-components/types";
import { createProductSchema } from "@/app/lib/zod-schema";
import productRepository from "../repository/product.repository";
import { IActionsConfig } from ".";




// // export default async function productActions() {
// return {
//     async createProduct(state: FormState, actionData: IProductActions) {

//         const { createProducts } = await productRepository()
//         const { formData } = actionData
//         // const server = new Socket()
//         try {
//             const validatedFields = createProductSchema.safeParse({
//                 productName: formData.get('productName'),
//                 productPrice: formData.get('productPrice'),
//                 productQuantity: formData.get('productQuantity'),
//                 productDescription: formData.get('productDescription'),
//                 productSku: formData.get('productSku'),
//             })
//             if (!validatedFields.error) {
//                 await createProducts(validatedFields.data)

//                 return {
//                     message: { successMessage: 'product created succesfully' }
//                 }
//             }
//             return {
//                 errors: validatedFields.error.flatten().fieldErrors
//             }
//         } catch (error) {
//             throw error
//         }
//     },

//     async deleteProduct(id: number) {
//         const { deleteProduct } = await productRepository()
//         if (!id) return 'identifier is needed'
//         await deleteProduct(id)
//         return 'succesfully deleted'
//     }
// }
// // }



export async function createProduct(state: FormState, actionData: IActionsConfig) {
    const { createProducts } = await productRepository()
    const { formData } = actionData
    console.log(formData)

    try {
        if (!formData) return
        const validatedFields = createProductSchema.safeParse({
            productName: formData.get('productName'),
            productPrice: formData.get('productPrice'),
            productQuantity: formData.get('productQuantity'),
            productSku: formData.get('productSku'),
        })

        console.log(validatedFields.error)
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

export async function updateProduct(state: FormState, actionData: IActionsConfig, id?: number) {
    const { updateProduct } = await productRepository()
    const { formData, productId } = actionData
    try {
        if (!formData) return
        const validatedFields = createProductSchema.safeParse({
            productName: formData.get('productName'),
            productPrice: formData.get('productPrice'),
            productQuantity: formData.get('productQuantity'),
            productStockStatus: formData.get('productStockStatus'),
            productSku: formData.get('productSku'),
        })



        if (!validatedFields.error) {
            await updateProduct({ ...validatedFields.data, productStockStatus: validatedFields.data.productStockStatus!, id: productId! })
            return {
                message: { successMessage: 'product updated' }
            }
        }
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    } catch (error) {
        throw error
    }
}

export async function deleteProduct(state: FormState, actionData: IActionsConfig) {
    try {
        const { deleteProduct } = await productRepository()
        const { productId } = actionData

        if (!productId) return { message: { errMessage: 'an identifier is needed' } }
        const productDeleted = await deleteProduct(productId)
        return {
            message: { successMessage: `${productDeleted.productName}  deleted` }
        }
    } catch (error) {
        throw error
    }

}