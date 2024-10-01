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
	const {
		isOn,
		modalCmp,
		off,
		on,
		refresh,
		setModalCmp,
		isSelected,
		setSelected
	} = useTable();

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
	const handleClick = (id: number) => {
		console.log(id);
		setSelected(!isSelected);
	};
	return (
		<tr className="border-b border-l">
			{tableData &&
				Object.values(tableData).map((data, index) =>
					<td
						scope="row"
						className={` ${isSelected
							? "bg-blue-300"
							: ""} border text-center lg:px-5 py-2 cursor-pointer`}
						key={index}
						onClick={() => handleClick(tableData.id)}>
						{data}
					</td>
				)}
			{/* TODO TRY TO IMPROVE THIS FUNCTION */}
			<td>
				<DropDwonCmp
					button={TableOptionButton({ toggleDropDown, id: tableData.id })}
					isDropDownActive={isDropDownOpen}
					options={tableOptions}
				/>
				{/* <ActionBtn isSelected={isSelected} /> */}
				<ShowModal isOn={isOn} modalCmp={modalCmp} off={off} />
			</td>
		</tr>
	);
}
