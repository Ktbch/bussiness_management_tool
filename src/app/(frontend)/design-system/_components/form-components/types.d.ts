
export interface InputTypeConfig {
    labelName: fieldNames
    type: InputTypes;
    placeholder: string;
    className: string;
    state: FormState
    options?: string[]
}

export type fieldNames = 'username' | 'password' | 'productName' | 'productPrice' | 'productQuantity' | 'productStockStatus' | 'productSku' | 'productSold' | 'quantity' | 'price' | 'discount' | 'status' | 'id';
export type InputTypes = "text" | "password" | "email" | 'number' | 'textArea' | 'tableFormInput' | 'checkbox' | 'select'

export interface IFieldConfig {
    index?: number
    name: fieldNames,
    type: InputTypes;
    placeholder: string;
}

export type FormState = {
    errors?: {
        username?: string[]
        password?: string[]
        productName?: string[]
        productPrice?: string[]
        productQuantity?: string[]
        productStockStatus?: string[]
        productSku?: string[],
        productSold?: string[],
        quantity?: string[],
        price?: string[],
        discount?: string[],
        status?: string[],
        id?: string[],
    }
    message?: {
        errMessage?: string,
        successMessage?: string
    }
} | undefined

interface IFormConfig {
    message?: {
        errMessage?: string,
        successMessage?: string
    }
}

export interface CreateOrderState extends IFormConfig {
    errors?: {
        productSold: string[],
        quantity: string[],
        price: string[],
        discount: string[],
        status: string[]
    } | undefined
} 