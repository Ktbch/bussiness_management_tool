"use client";

import DropDwonCmp from "@/app/(frontend)/view/dropDown";
import GenerateOptionsObj, { IOptionsFuncConfig } from "../constansts";
import ModalLayout from "@/app/(frontend)/view/modals/modalLayout";
import { TableOptionButton } from "./table-button";
import { ITableListConfig } from "./types";
import { Product, SalesOrder } from "@/app/_backend/database/schema/types";
import { useTable } from "@/app/(frontend)/hooks/state/useTable";

type TShowModal = {
	isOn: boolean;
	off: () => void;
	modalCmp: React.JSX.Element;
};

const ShowModal = ({ isOn, off, modalCmp }: TShowModal) => {
	if (!isOn) {
		return null;
	}
	return (
		<ModalLayout isOn={isOn} off={off} title="biling and invocing">
			{modalCmp}
		</ModalLayout>
	);
};

export default function TableList<T extends Product | SalesOrder>({
	tableData,
	isDropDownOpen,
	detalsCmp,
	updateCmp,
	actionFunc,
	toggleDropDown
}: ITableListConfig<T>) {
	// TODO REMOVE ALL THE STATE HANDLING FROM THE TABLE LIST
	// TODO MAKE THIS TABLE LIOST MORE OF A RESUABLE COMPONETS
	const { modalCmp, refresh, setModalCmp, isOn, off, on } = useTable();

	// TODO FIX THIS DELETE FUNTION
	const optionsParams: IOptionsFuncConfig<T> = {
		actionFunc: actionFunc,
		detailsModalCmp: detalsCmp,
		editModalCmp: updateCmp,
		id: tableData.id,
		off: off,
		on: on,
		refresh: refresh,
		setModalCmp,
		data: tableData!
	};

	const generateTableOptionsObj = new GenerateOptionsObj<T>(optionsParams, [
		"edit",
		"delete",
		"view"
	]);

	const tableOptions = generateTableOptionsObj.generateTableOptionsObj();

	// TODO DELETE ALL
	// TODO REMOVE THIS FROM HERE
	const stockStatusColorPicker = (data: string | number | null) => {
		switch (data) {
			case "low stock":
				return "text-errorColor";
			case "average stock":
				return "text-primaryColor";
			case "full stock":
				return "text-secondaryColor";
			case "out of stock":
				return "text-netualColor2";
			default:
				return;
		}
	};
	return (
		<tr className="border-b border-l">
			{tableData &&
				Object.values(tableData).map((data, index) =>
					//  seprated this td to its seperate component
					<td
						scope="row"
						className={`border text-center lg:px-5 py-2 cursor-pointer`}
						key={index}>
						<span className={stockStatusColorPicker(data)}>
							{data}
						</span>
					</td>
				)}
			{/* TODO TRY TO IMPROVE THIS FUNCTION */}
			<td>
				{/* is this a good design */}
				<DropDwonCmp
					tableDataId={tableData.id}
					button={
						<TableOptionButton
							toggleDropDown={toggleDropDown}
							id={tableData.id}
						/>
					}
					isDropDownActive={isDropDownOpen}
					options={tableOptions}
				/>
				{/* <ActionBtn isSelected={isSelected} /> */}
				<ShowModal isOn={isOn} modalCmp={modalCmp!} off={off} />
			</td>
		</tr>
	);
}
