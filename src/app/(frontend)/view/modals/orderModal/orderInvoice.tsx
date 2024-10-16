"use client";

import DelayRender from "@/app/(frontend)/components/delay-rendering";
import { useItemIdentifier } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";
import useGetData from "@/app/(frontend)/hooks/data_fetching/useGetData";
import { useMutation } from "@/app/(frontend)/hooks/useMutation";
import { updateOrderStatusAction } from "@/app/_backend/actions/create-order.action";
import { getOneOrder } from "@/app/_backend/data/order/order.data";
import { SalesOrder } from "@/app/_backend/database/schema/types";
import { useState } from "react";

export default function OrderInvoice() {
	const { identifier } = useItemIdentifier();
	const [paid, setPaid] = useState<"paid" | null>(null);

	// Todo male this more effective
	const orderData = useGetData(getOneOrder, identifier);
	const { handleMutation } = useMutation(updateOrderStatusAction);

	if (!orderData) {
		return (
			<DelayRender delayWait={10}>
				<p>Loading...</p>
			</DelayRender>
		);
	}

	const handleClcik = () => {
		if (orderData.status === "unpaid") {
			setPaid("paid");
			handleMutation({ productId: identifier });
		}
		return;
	};

	return (
		<div className="flex flex-col items-start gap-10">
			<h1>Order Invoice Summary</h1>
			<div className="flex flex-col items-start gap-5">
				<h1>
					ProductSold: {orderData.productSold}
				</h1>
				<h1>
					QuantitySold: {orderData.quantitySold}
				</h1>
				<div className="flex items-center gap-5">
					<p>
						Price: N{orderData.price}
					</p>
					<p>
						Discount: {orderData.discount}
					</p>
				</div>
				<button
					onClick={handleClcik}
					className={`border p-3 ${!paid
						? orderData.status === "paid" && "bg-secondaryColor"
						: "bg-secondaryColor"} bg-primaryColor text-neturalColor hover:bg-secondaryColor`}>
					{!paid
						? orderData.status === "paid" ? "View Recipt" : "Mark as Paid"
						: "View Recipt"}
				</button>
			</div>
		</div>
	);
}
