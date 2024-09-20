import { Product } from "@/app/_backend/database/schema/types";

export interface InputTypeConfig {
    labelName: fieldNames
    type: InputTypes;
    placeholder: string;
    className: string;
    state: FormState
}

export type fieldNames = 'username' | 'password' | 'productName' | 'productPrice' | 'productQuantity' | 'productDescription' | 'productSku';
export type InputTypes = "text" | "password" | "email" | 'number' | 'textArea' | 'tableFormInput'

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
        productDescription?: string[]
        productDescription?: string[],
        productSku?: string[]
    }
    message?: {
        errMessage: string,
        successMessage: string
    }
} | undefined