import { IFieldConfig } from "../../design-system/_components/form-components/types";

export const Siginfields: IFieldConfig[] = [
    { name: "username", placeholder: "username", type: "text" },
    { name: "password", placeholder: "password", type: "password" }
];

export const CreateProductFields: IFieldConfig[] = [
    { name: "productName", placeholder: 'product name', type: 'text' },
    { name: "productPrice", placeholder: 'product price', type: 'number' },
    { name: "productQuantity", placeholder: 'product price', type: 'number' },
    { name: "productDescription", placeholder: 'product description', type: 'textArea' },
    { name: "productSku", placeholder: 'product sku', type: 'text' },
]

export const UpdateProductFields: IFieldConfig[] = [
    { name: "id", placeholder: 'product name', type: 'text' },
    { name: "productName", placeholder: 'product name', type: 'text' },
    { name: "productPrice", placeholder: 'product price', type: 'number' },
    { name: "productQuantity", placeholder: 'product price', type: 'number' },
    { name: "productDescription", placeholder: 'product description', type: 'textArea' },
    { name: "productSku", placeholder: 'product sku', type: 'text' },
]


export const CreateOrderFields: IFieldConfig[] = [
    { name: "productSold", placeholder: 'product sold', type: 'text' },
    { name: "price", placeholder: 'product price', type: 'number' },
    { name: "quantity", placeholder: 'quantity sold', type: 'number' },
    { name: "discount", placeholder: 'discount', type: 'text' },
    { name: "status", placeholder: 'status', type: 'select' },
]
