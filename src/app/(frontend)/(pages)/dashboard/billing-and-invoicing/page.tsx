"use server";

import BillingAndInventoryManagementView from "@/app/(frontend)/view/billing-and-invoicing";
import orderData from "@/app/_backend/data/order/order.data";
import { SalesOrder } from "@/app/_backend/database/schema/types";
import React from "react";

interface IProps {
	searchParams: {
		page: string;
	};
}

export default async function BillingAndInvocingPage({ searchParams }: IProps) {
	const orders: SalesOrder[] = await orderData(parseInt(searchParams.page));
	return (
		<BillingAndInventoryManagementView
			data={orders}
			quantity={orders.length}
			resource={"orders"}
		/>
	);
}
