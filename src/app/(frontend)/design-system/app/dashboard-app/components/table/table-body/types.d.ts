import { Product, SalesOrder } from "@/app/_backend/database/schema/types"
import React from "react"
interface ITableListConfig<T> {
    tableData: T
    isDropDownOpen: boolean
    detalsCmp: ({ data }: { data: T }) => React.JSX.Element
    updateCmp: React.JSX.Element
    actionFunc: React.JSX.Element
    toggleDropDown: (id: number) => void
}

interface IProps {
    data: Product[] | SalesOrder[];
}