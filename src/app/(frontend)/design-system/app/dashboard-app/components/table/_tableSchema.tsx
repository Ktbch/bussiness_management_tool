"use client";

import { TableHeading } from "./table-heading";
import TableBody from "../table/table-body/index";
import { ITableConfig } from "./types";
import { TableFooter } from "./table-footer";
import { SalesOrder, Product } from "@/app/_backend/database/schema/types";
import { ModalActionContextProvider } from "@/app/(frontend)/context/modal/modal-context";

function TableSchema<T extends Product | SalesOrder>({ ...tablePropps }: ITableConfig<T>) {
	const { data, detailsJsxElement, editJsxElement, quantity, actionFunc } = tablePropps;
	return (
		<table className="w-full font-serif ">
			<TableHeading<T> data={data} />
					<TableBody<T>
						data={data}
						quantity={quantity!}
						detailsJsxElement={detailsJsxElement}
						editJsxElement={editJsxElement}
						actionFunc={actionFunc}
						/>
				    <TableFooter quantity={quantity!} />
		</table>
	);
}

export default TableSchema;
