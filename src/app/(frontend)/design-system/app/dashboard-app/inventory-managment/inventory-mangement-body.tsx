import { Product } from "@/app/_backend/database/schema/types";
import DashBoardBody from "../_layout/dashboard-body";
import RenderTable from "../components/table";
import { NoDataFoundCmp } from "../no-data-found";
import { deleteProduct } from "@/app/_backend/actions/product.action";
import ProductDetails from "@/app/(frontend)/view/modals/orderModal/productDetails";
import CreateProducts from "@/app/(frontend)/view/modals/productModal/createProducts";
import UpdateProducts from "@/app/(frontend)/view/modals/productModal/updateProducts";

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
				? <RenderTable<Product>
						data={data}
						quantity={quantity}
						actionFunc={deleteProduct}
						editJsxElement={<UpdateProducts />}
						detailsJsxElement={ProductDetails}
					/>
				: <NoDataFoundCmp dataName={resource} />}
		</DashBoardBody>
	);
}
