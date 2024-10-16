"use client";

import DelayRender from "@/app/(frontend)/components/delay-rendering";
import { useItemIdentifier } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";
import useGetData from "@/app/(frontend)/hooks/data_fetching/useGetData";
import { getOneProduct } from "@/app/_backend/data/product/product.data";

export default function ProductDetails() {
	const { identifier } = useItemIdentifier();
	const productData = useGetData(getOneProduct, identifier);

	if (!productData) {
		return <DelayRender delayWait={5}>Loading..</DelayRender>;
	}
	return (
		<div className=" max--w-7xl m-auto flex flex-col gap-5 mt-10 text-md font-semibold items-start p-5 ">
			<h1 className="capitalize">
				{productData.productName}
			</h1>
			<div className="text-start  tracking-wide">
				{productData.productStockStatus}
			</div>
			<div className="flex items-center gap-10">
				<p>
					ProductPrice:{productData.productPrice}
				</p>
				<p>
					ProductQuantity:{productData.productQuantity}
				</p>
			</div>
			<div className="ml-auto">
				{productData.productSku}
			</div>
		</div>
	);
}
