"use server";

// import TableSkeleton from "@/app/(frontend)/design-system/app/dashboard-app/components/table/_tableSkeleton";
import InventoryManagementView from "@/app/(frontend)/view/inventory-management";
import productData from "@/app/_backend/data/product/product.data";
// import { revalidatePath } from "next/cache";

interface IProps {
	searchParams: {
		page: string;
	};
}

const InventoryManagementPage = async ({ searchParams }: IProps) => {
	// Todo Refactor this

	const { allProducts, allProductsLenght } = await productData(
		searchParams.page
	);
	return (
		<InventoryManagementView
			data={allProducts}
			quantity={allProductsLenght}
			resource="products"
		/>
		// <TableSkeleton />
	);
};

export default InventoryManagementPage;
