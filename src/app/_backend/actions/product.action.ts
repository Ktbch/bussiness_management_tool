'use server'

import { FormState } from "@/app/(frontend)/design-system/_components/form-components/types";
import { createProductSchema } from "@/app/lib/zod-schema";
import productRepository from "../repository/product.repository";

export default async function productAction(state: FormState, formData: FormData) {
    const { createProducts } = await productRepository()
    try {
        const validatedFields = createProductSchema.safeParse({
            productName: formData.get('productName'),
            productPrice: formData.get('productPrice'),
            productQuantity: formData.get('productQuantity'),
            productDescription: formData.get('productDescription'),
            productSku: formData.get('productSku'),
        })
        if (validatedFields.error) {
            return {
                errors: validatedFields.error.flatten().fieldErrors
            }
        }
        const newProdcuts = await createProducts(validatedFields.data)
        if (newProdcuts) {
            return
        }
    } catch (error) {
        throw error
    }
} 
