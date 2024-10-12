import { Product, SalesOrder } from "@/app/_backend/database/schema/types";
import TableSchema from "./_tableSchema";
import { ITableConfig } from "./types";
import { ItemIdentifierProvider } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";



export default function RenderTable<T extends Product | SalesOrder>({ ...tableProps }: ITableConfig<T>) {
	const { data, detailsJsxElement, editJsxElement, quantity, actionFunc } = tableProps

	 
	return <TableSchema<T> data={data} quantity={quantity} detailsJsxElement={detailsJsxElement} editJsxElement={editJsxElement} actionFunc={actionFunc} />;
	 
}
