'use client'

import { Product } from "@/app/_backend/database/schema/types";
import DashBoardBody from "../_layout/dashboard-body";
import RenderTable from "../components/table";
import { NoDataFoundCmp } from "../no-data-found";
import ProductDetails from "@/app/(frontend)/view/modals/orderModal/productDetails";
import CreateProducts from "@/app/(frontend)/view/modals/productModal/createProducts";
import { UpdateProducts } from "@/app/(frontend)/view/modals/productModal/updateProducts";
import { ItemIdentifierProvider } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";
import DeleteProducts from "@/app/(frontend)/view/modals/productModal/deleteProducts";

interface IProps {
	data: Product[];
	quantity: number;
	resource: string;
}



export default function InventoryManagementBody({
	data,
	quantity,
	resource
}: IProps) {
	return (
		<DashBoardBody resource={resource} jsxElement={CreateProducts}>
			{data.length !== 0
				?
				<ItemIdentifierProvider>
					<RenderTable<Product>
						data={data}
						quantity={quantity}
						actionFunc={<DeleteProducts />}
						editJsxElement={<UpdateProducts />}
						detailsJsxElement={ProductDetails}
						/>
					</ItemIdentifierProvider>
				: <NoDataFoundCmp dataName={resource} />}
		</DashBoardBody>
	);
}
