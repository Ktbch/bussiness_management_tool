
'use server'

import { FormState } from '@/app/(frontend)/design-system/_components/form-components/types'
import salesOrderRepository from '../repository/sales-order.repository'
import { createOrderSchema } from '@/app/lib/zod-schema'

export default async function createOrderAction(state: FormState, formData: FormData) {

    try {
        const { createOrder, balanceProduct } = salesOrderRepository()

        const validatedFields = createOrderSchema.safeParse({
            productSold: formData.get('productSold'),
            quantitySold: formData.get('quantity'),
            price: formData.get('price'),
            discount: formData.get('discount'),
            status: formData.get('status'),
        })


        if (!validatedFields.error) {
            const result = await createOrder({
                ...validatedFields.data, status: validatedFields.data.status
            })
            return {
                message: { successMessage: result }
            }
        }

        return {
            message: { errMessage: validatedFields.error.message }
        }
    } catch (error) {
        throw error
    }
}
