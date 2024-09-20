import { z } from 'zod'

export const SignInFormSchema = z.object({
    username: z.string().min(2, { message: 'username must be more that 2 characters' }).trim(),
    password: z.string().min(3, { message: 'password must be more than 3 characters' }).regex(/[a-zA-Z]/, { message: 'password must contaian a password' })
})

export const createProductSchema = z.object({
    productName: z.string().min(1, { message: 'productName musty be at least one charcters' }),
    productPrice: z.string().min(1, { message: 'productName musty be at least one charcters' }),
    productQuantity: z.string().min(1, { message: 'productName musty be at least one charcters' }),
    productDescription: z.string().min(1, { message: 'productName musty be at least one charcters' }),
    productSku: z.string().min(1, { message: 'productName musty be at least one charcters' }),
})