"use client";

import { Product } from "@/app/_backend/database/schema/types";

import { SystemIconsCmp } from "../../../_components/SystemIcons";
import ModalLayout from "@/app/(frontend)/view/modals/modalLayout";
import ProductDetails from "@/app/(frontend)/view/modals/productDetails";
import { PaginationCmp } from "../paganiation";
import Tableform from "../../../_components/form-components/table-form";
import { fieldNames } from "../../../_components/form-components/types";

interface IProps {
	data: Product[];
	quantity?: number;
	isOn?: boolean;
}
// TODO PAGNITAION AND TABLE FOTTER
// TODO MOBILE VIEW
const TableHeading = ({ data }: IProps) => {
	return (
		<thead className="">
			<tr className="p-10">
				{Object.keys(data[0]).map((head, index) =>
					<th
						scope="col"
						key={index}
						className="lg:px-5 border py-3 capitalize">
						{head}
					</th>
				)}
				<th className="lg:px-5 border py-3 capitalize">
					<SystemIconsCmp icon="settingsIcon" iconStyle="h-3 w-3" />
				</th>
			</tr>
		</thead>
	);
};
//  TODO THE TOGGLE OPTIONS
const TableBody = ({ data }: IProps) => {
	const items = ["view", "delete", "update"];
	// Double spread
	return data.map((tableData, index) =>
		<tbody className="text-xs text-gray-700 uppercase relative">
			<tr className="border-b border-l" key={index}>
				{Object.values(tableData).map((data, index) =>
					<td
						scope="row"
						className="border text-center lg:px-5 py-2"
						key={index}>
						{data}
					</td>
				)}
				<td
					key={tableData.id}
					className="border text-center lg:px-5 lg:py-2 cursor-pointer">
					<div className="relative">
						<ModalLayout
							children={<ProductDetails data={tableData} />}
							modalButtonClassName=""
							modalButtonIcon="dotIcon"
							key={tableData.id}
							modalButtonName=""
						/>
					</div>
				</td>
			</tr>
			<tr />
		</tbody>
	);
};

const TableFooter = ({ quantity }: IProps) => {
	return (
		<tfoot>
			<tr className="border w-full">
				<td className="p-3 w-full ml-auto">
					<PaginationCmp quantity={quantity!} />
				</td>
			</tr>
		</tfoot>
	);
};

const InsertNewTableData = ({ data }: IProps) => {
	const tableDatas = Object.keys(data[0]) as fieldNames[];
	return (
		//  TODO IMPLEMNT ON ENTER GO TO THE NEXT TABLE FIELD
		<Tableform data={tableDatas} />
	);
};

const TableSchema = ({ data, quantity, isOn }: IProps) => {
	return (
		<div className="relative">
			{isOn && <InsertNewTableData data={data} />}
			<table className="w-full">
				<TableHeading data={data} />
				<TableBody data={data} />
				<TableFooter data={data} quantity={quantity} />
			</table>
		</div>
	);
};

export default TableSchema;
