"use client";
import { Product } from "@/app/_backend/database/schema/types";
import RenderTable from "../../design-system/app/dashboard-app/table";
import { SystemIconsCmp } from "../../design-system/_components/SystemIcons";
import { useToggle } from "../../hooks/state/useToggle";
import CreateProducts from "../modals/createProducts";
import ModalLayout from "../modals/modalLayout";

interface IProps {
	data: Product[];
	quantity: number;
}

const NoDataFoundComponents = ({ dataName }: { dataName: string }) => {
	return (
		<div>
			No {dataName} Yet....
		</div>
	);
};

export default function InventoryManagementBody({ data, quantity }: IProps) {
	// TODO REFACTOR THIS CODE
	//  TODO FIX RERENDERING
	const { on, isOn } = useToggle();
	return (
		<div className="flex flex-col items-start gap-10 w-full">
			<div className="flex items-center w-full justify-between">
				<h3>Product Table:</h3>
				{/* <ModalLayout
					children={<CreateProducts />}
					modalButtonClassName="flex flex-row-reverse items-center gap-3 border p-3"
					modalButtonIcon="plusIcon"
					modalButtonName="Add New Products"
				/> */}
				<button
					className="flex flex-row-reverse items-center gap-3 border p-3"
					onClick={on}>
					<SystemIconsCmp icon="plusIcon" iconStyle="" />
				</button>
			</div>
			{data.length !== 0
				? <RenderTable data={data} quantity={quantity} isOn={isOn} />
				: <NoDataFoundComponents dataName="products" />}
		</div>
	);
}
