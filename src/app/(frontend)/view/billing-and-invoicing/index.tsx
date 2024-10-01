import DashboardContentHeader from "../../design-system/app/dashboard-app/_layout/dashboard-content-header";
import { SalesOrder } from "@/app/_backend/database/schema/types";
import BillingAndInvocingBody from "../../design-system/app/dashboard-app/billing-and-invoicing";

interface IProps{
	data: SalesOrder[];
	quantity: number
	resource:string
}

export default function BillingAndInventoryManagementView({ data, quantity, resource }: IProps) {
	return (
		<>
			<DashboardContentHeader quantity={quantity} resource={resource} />
			<BillingAndInvocingBody data={data} quantity={quantity} resource={resource} />
		</>
	);
}