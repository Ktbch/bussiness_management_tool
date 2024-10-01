'use client'

import React from "react";
import DashBoardBody from "../_layout/dashboard-body";
import RenderTable from "../components/table";
import { NoDataFoundCmp } from "../no-data-found";
import { SalesOrder } from "@/app/_backend/database/schema/types";
import CreateOrders from "@/app/(frontend)/view/modals/orderModal/createOrder";
import OrderInvoice from "@/app/(frontend)/view/modals/orderModal/orderInvoice";

interface IProps {
	data: SalesOrder[];
	quantity: number;
	resource: string;
}



const deleteFun = async() => {
	return 'hello'
}

export default function BillingAndInvocingBody({
	data,
	quantity,
	resource
}: IProps) {
	return (
		<DashBoardBody resource={resource} jsxElement={CreateOrders}>
			{data.length !== 0
				? <RenderTable<SalesOrder> data={data} quantity={quantity} detailsJsxElement={OrderInvoice} editJsxElement={<div>hello</div>} actionFunc={deleteFun} />
				: <NoDataFoundCmp dataName={resource} />}
		</DashBoardBody>
	);
}
