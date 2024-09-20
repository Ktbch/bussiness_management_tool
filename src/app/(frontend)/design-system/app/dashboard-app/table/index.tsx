import { Product } from "@/app/_backend/database/schema/types";
import TableSchema from "./_tableSchema";

interface IProps {
	data: Product[];
	quantity: number;
	isOn: boolean;
}

export default function RenderTable({ data, quantity, isOn }: IProps) {
	return <TableSchema data={data} quantity={quantity} isOn={isOn} />;
}
