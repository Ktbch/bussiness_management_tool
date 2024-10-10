import { z } from 'zod'

export const SignInFormSchema = z.object({
    username: z.string().min(2, { message: 'username must be more that 2 characters' }).trim(),
    password: z.string().min(3, { message: 'password must be more than 3 characters' }).regex(/[a-zA-Z]/, { message: 'password must contaian a password' })
})

export const createProductSchema = z.object({
    productName: z.string().min(1, { message: 'productName musty be at least one charcters' }),
    productPrice: z.string().min(1, { message: 'productName musty be at least one charcters' }),
    productQuantity: z.string().min(1, { message: 'productName musty be at least one charcters' }),
    // productDescription: z.string().min(1, { message: 'productName musty be at least one charcters' }),
    productSku: z.string().min(1, { message: 'productName musty be at least one charcters' }),
    // productStockStatus: z.enum(['out of stock', 'full stock', 'average stock', 'low stock'])
})

export const createOrderSchema = z.object({
    productSold: z.string().min(1, { message: 'product sold must be at least one charcter' }),
    quantitySold: z.string().min(1, { message: 'quantity must be at least one chracters' }),
    price: z.string().min(1, { message: 'price must be at least one chracters' }),
    discount: z.string().optional(),
    status: z.enum(['paid', 'unpaid']).optional().nullable()

})