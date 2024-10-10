"use client";

import { Product } from "@/app/_backend/database/schema/types";

interface IProps {
	data: Product;
}

export default function ProductDetails({ data }: IProps) {
	return (
		<div className=" max--w-7xl m-auto flex flex-col gap-5 mt-10 text-md font-semibold items-start p-5 ">
			<h1 className="capitalize">
				{data.productName}
			</h1>
			<div className="text-start  tracking-wide">
				{data.productStockStatus}
			</div>
			<div className="flex items-center gap-10">
				<p>
					ProductPrice:{data.productPrice}
				</p>
				<p>
					ProductQuantity:{data.productQuantity}
				</p>
			</div>
			<div className="ml-auto">
				{data.productSku}
			</div>
		</div>
	);
}
