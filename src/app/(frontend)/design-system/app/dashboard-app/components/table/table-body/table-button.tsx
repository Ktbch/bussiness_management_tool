"use client";

import { ItemIdentifierProvider } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";
import { SystemIconsCmp } from "@/app/(frontend)/design-system/_components/SystemIcons";
import { useTable } from "@/app/(frontend)/hooks/state/useTable";

interface ITableOptionsProps {
	toggleDropDown: (id: number) => void;
	id: number;
}

export const TableOptionButton = ({
	...tableOptionsProps
}: ITableOptionsProps) => {
	const { id, toggleDropDown } = tableOptionsProps;

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
