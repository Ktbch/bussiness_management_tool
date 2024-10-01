import { Product, SalesOrder } from "@/app/_backend/database/schema/types";
import { SystemIconsCmp } from "../../../../_components/SystemIcons";

interface IProps<T> {
	data: T[];
}

export function TableHeading<T extends Product | SalesOrder>({
	data
}: IProps<T>) {
	return (
		<thead className="text-netualColor2">
			<tr className="p-10">
				{Object.keys(data[0]).map((head, index) =>
					<th
						scope="col"
						key={index}
						className="lg:px-5 border py-3 capitalize">
						{head}
					</th>
				)}
				<th className="lg:px-5 border py-3 capitalize">
					<SystemIconsCmp icon="settingsIcon" iconStyle="h-3 w-3" />
				</th>
			</tr>
		</thead>
	);
}
