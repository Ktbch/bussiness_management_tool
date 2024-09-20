import { Product } from "@/app/_backend/database/schema/types";

interface IProps {
	quantity: number;
}

export default function InventoryManagementHeader({ quantity }: IProps) {
	// TODO cal all product
	// TODO ALl Product quantity amount
	return (
		<div className="flex items-center gap-10">
			<p>
				Total Product Quantity:{quantity}
			</p>
			<p>
				Total Product Stock :{quantity}
			</p>
		</div>
	);
}
