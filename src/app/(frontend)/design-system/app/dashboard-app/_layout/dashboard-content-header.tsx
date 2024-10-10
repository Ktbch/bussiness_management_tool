"use client";

import { usePathname } from "next/navigation";

interface IProps {
	quantity: number;
	resource: string;
}

export default function DashboardContentHeader({ quantity, resource }: IProps) {
	const pathName = usePathname();
	return (
		<div className="flex items-center gap-10 font-bold text-netualColor2">
			<p>
				Total {resource} : {quantity}
			</p>
			{pathName === "/dashboard/inventory-management"
				? <p>
						Total Product Stock :{quantity}
					</p>
				: ""}
		</div>
	);
}
