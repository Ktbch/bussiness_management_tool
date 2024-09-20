import { Product } from "@/app/_backend/database/schema/types";

interface IProps {
	modalData: string | number;
}

export default function ModelToggleItemsDisplay({ modalData }: IProps) {
	return (
		<div className="fixed top-1 left-1 border p-3">
			{modalData}
		</div>
	);
}
