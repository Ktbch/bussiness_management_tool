"use client";

import { Product, SalesOrder } from "@/app/_backend/database/schema/types";
import { ITableConfig } from "../types";
import TableList from "./table-list";
import { useTable } from "@/app/(frontend)/hooks/state/useTable";

export default function TableBody<T extends Product | SalesOrder>({
	...tableProps
}: ITableConfig<T>) {
	const { dropwDownState, toggleDropDown } = useTable() ;
	const { data, detailsJsxElement, editJsxElement, actionFunc } = tableProps;

	return data.map((tableData, index) =>
		<tbody className="text-xs text-netualColor2 font-semibold  uppercase relative" key={index}>
			<TableList<T>
				tableData={tableData}
				isDropDownOpen={dropwDownState[tableData.id]}
				key={tableData.id}
				actionFunc={actionFunc}
				detalsCmp={detailsJsxElement}
				updateCmp={editJsxElement}
				toggleDropDown={toggleDropDown}
			/>
		</tbody>
	);
}
