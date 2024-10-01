import { Product, SalesOrder } from "@/app/_backend/database/schema/types"
interface ITableListConfig<T> {
    tableData: T
    isDropDownOpen: boolean
    detalsCmp: ({ data }: { data: T }) => React.JSX.Element
    updateCmp: React.JSX.Element
    actionFunc: (id: number) => Promise<string>
    toggleDropDown: (id: number) => void
}

interface IProps {
    data: Product[] | SalesOrder[];
}