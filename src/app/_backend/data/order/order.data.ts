'use server'

import salesOrderRepository from "../../repository/sales-order.repository"

export default async function orderData(page: number) {
    const { getAllOrders } = salesOrderRepository()
    try {
        // console.log(page)
        const orders = await getAllOrders(page)
        return orders
    } catch (error) {
        throw error
    }

}

export async function getOneOrder(id: number) {
    const { getOrderByID } = salesOrderRepository()
    try {
        const order = await getOrderByID(id)
        return order
    } catch (error) {
        throw error
    }

}