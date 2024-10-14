
'use server'

import { FormState } from '@/app/(frontend)/design-system/_components/form-components/types'
import salesOrderRepository from '../repository/sales-order.repository'
import { createOrderSchema } from '@/app/lib/zod-schema'
import { IActionsConfig } from '.'
import { responseMessageTool } from './utils'



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
            return responseMessageTool(result, 'sucess')
        }

        return responseMessageTool(validatedFields.error.message, 'error')
    } catch (error) {
        throw error
    }
}


export async function deleteOrder(state: FormState, actionData: IActionsConfig) {

    try {
        const { deleteOrders } = salesOrderRepository()
        const { productId } = actionData
        if (!productId) return responseMessageTool('identifier expected', 'error')

        const result = await deleteOrders(productId)

        return responseMessageTool('order deleted sucessfully', 'sucess')

    } catch (error) {

    }
}