"use client";

import { SalesOrder } from "@/app/_backend/database/schema/types";
import { useState } from "react";

export default function OrderInvoice({ data }: { data: SalesOrder }) {
	const [status, setStatus] = useState(true);

	const handleClick = () => {
		setStatus(false);
	};

	console.log(status);
	return (
		<div className="flex flex-col items-start gap-10">
			<h1>Order Invoice Summary</h1>
			<div className="flex flex-col items-start gap-5">
				<h1>
					ProductSold: {data.productSold}
				</h1>
				<h1>
					QuantitySold: {data.quantitySold}
				</h1>
				<div className="flex items-center gap-5">
					<p>
						Price: N{data.price}
					</p>
					<p>
						Discount: {data.discount}
					</p>
				</div>
				<button
					onClick={handleClick}
					className={`border p-3 ${data.status === "paid" &&
						"bg-secondaryColor"} bg-primaryColor text-neturalColor hover:bg-secondaryColor`}>
					{data.status === "paid" ? "View Recipt" : "Mark as Paid"}
				</button>
			</div>
		</div>
	);
}
