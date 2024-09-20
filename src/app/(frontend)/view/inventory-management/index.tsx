import { Product } from "@/app/_backend/database/schema/types";
import InventoryManagementHeader from "./header";
import InventoryManagementBody from "./body";

interface IProps {
	data: Product[];
	quantity:number
}

// TODO create A Product Context that would suplly the data to all the component
export default function InventoryManagementView({ data, quantity }: IProps) {
	return (
			<>
			<InventoryManagementHeader  quantity={quantity} />
			<InventoryManagementBody data={data} quantity={quantity} />
			</>
	);
}
