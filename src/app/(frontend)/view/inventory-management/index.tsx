import { Product } from "@/app/_backend/database/schema/types";
import DashboardContentHeader from "../../design-system/app/dashboard-app/_layout/dashboard-content-header";
import InventoryManagementBody from "../../design-system/app/dashboard-app/inventory-managment/inventory-mangement-body";

interface IProps{
	data: Product[];
	quantity: number
	resource:string
}

// TODO FIND SOMETHNIG TO USE INSTEAD OF FRAGMENTS
export default function InventoryManagementView({ data, quantity, resource }: IProps) {
	return (
		<>
			<DashboardContentHeader quantity={quantity} resource={resource} />
			<InventoryManagementBody data={data} quantity={quantity} resource={resource} />
		</>
	);
}
