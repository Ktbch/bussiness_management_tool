"use client";

import { SystemIconsCmp } from "@/app/(frontend)/design-system/_components/SystemIcons";
import { useTable } from "@/app/(frontend)/hooks/state/useTable";

export const TableOptionButton = ({
	toggleDropDown,
	id
}: {
	toggleDropDown: (id: number) => void;
	id: number;
}) => {
	const { identifier } = useTable();

	const handleClick = () => {
		toggleDropDown(id);
		// replace(`${pathName}&?id=${id
	};
	return (
		<td className="border text-center lg:px-5 lg:py-2 cursor-pointer">
			<button
				className="flex flex-row-reverse items-center"
				onClick={handleClick}>
				<SystemIconsCmp icon="dotIcon" iconStyle="" />
			</button>
		</td>
	);
};
