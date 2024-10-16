'use client'

import React from "react";
import DashBoardBody from "../_layout/dashboard-body";
import RenderTable from "../components/table";
import { NoDataFoundCmp } from "../no-data-found";
import { SalesOrder } from "@/app/_backend/database/schema/types";
import CreateOrders from "@/app/(frontend)/view/modals/orderModal/createOrder";
import OrderInvoice from "@/app/(frontend)/view/modals/orderModal/orderInvoice";
import { ItemIdentifierProvider } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";
import DeleteOrder from "@/app/(frontend)/view/modals/orderModal/deleteOrder";
import UpdateOrder from "@/app/(frontend)/view/modals/orderModal/updateOrder";

interface IProps {
	data: SalesOrder[];
	quantity: number;
	resource: string;
}





export default function BillingAndInvocingBody({
	data,
	quantity,
	resource
}: IProps) {
	return (
		<DashBoardBody resource={resource} jsxElement={CreateOrders}>
			{data.length !== 0
				?
				<ItemIdentifierProvider>
					<RenderTable<SalesOrder>
						data={data}
						quantity={quantity}
						detailsJsxElement={<OrderInvoice  />}
						editJsxElement={<UpdateOrder />}
						actionFunc={<DeleteOrder />}
					/>
				</ItemIdentifierProvider>
				: <NoDataFoundCmp dataName={resource} />}
		</DashBoardBody>
	);
}
