
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

        // TODO DO THIS IN A BETTER WAY
        //  use enums and select instead
        console.log(formData.get('status'))
        if (!validatedFields.error) {
            await createOrder({
                ...validatedFields.data, status: validatedFields.data.status
            })
            await balanceProduct(validatedFields.data.productSold, parseInt(validatedFields.data.quantitySold))
            return {
                message: { successMessage: 'created successfully' }
            }
        }

        return {
            message: { errMessage: validatedFields.error.message }
        }
    } catch (error) {
        throw error
    }
}
