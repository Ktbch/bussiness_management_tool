
'use server'

import { FormState } from '@/app/(frontend)/design-system/_components/form-components/types'
import salesOrderRepository from '../repository/sales-order.repository'
import { createOrderSchema, updateOrderSchema } from '@/app/lib/zod-schema'
import { IActionsConfig } from '.'
import { responseMessageTool } from './utils'



export default async function createOrderAction(state: FormState, actionData: IActionsConfig) {

    try {
        const { createOrder, balanceProduct } = salesOrderRepository()
        const { formData } = actionData

        if (!formData) return

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


export async function updateOrderAction(state: FormState, actionData: IActionsConfig) {
    try {
        const { updateOrderRepository } = salesOrderRepository()
        const { formData, productId } = actionData
        if (!formData) return
        const validatedFields = updateOrderSchema.safeParse({
            productSold: formData.get('productSold'),
            quantitySold: formData.get('quantity'),
            price: formData.get('price'),
            discount: formData.get('discount'),
            status: formData.get('status'),
        })

        console.log(productId)
        console.log(validatedFields.error?.message)

        if (!validatedFields.error) {
            const result = await updateOrderRepository({ ...validatedFields.data, id: productId })
            console.log(result)
            return responseMessageTool(result, 'sucess')
        }

        return
    } catch (error) {
        throw error
    }
}

export async function deleteOrder(state: FormState, actionData: IActionsConfig) {

    try {
        const { deleteOrdersRepository } = salesOrderRepository()
        const { productId } = actionData
        if (!productId) return responseMessageTool('identifier expected', 'error')

        const result = await deleteOrdersRepository(productId)

        return responseMessageTool('order deleted sucessfully', 'sucess')

    } catch (error) {
        throw error
    }
}

export async function updateOrderStatusAction(state: FormState, actionData: IActionsConfig) {
    try {
        const { changeOrderStatus } = salesOrderRepository()
        const { productId } = actionData

        await changeOrderStatus(productId!)

        return responseMessageTool('order updated customer paid', 'sucess')
    } catch (error) {
        throw error
    }
}