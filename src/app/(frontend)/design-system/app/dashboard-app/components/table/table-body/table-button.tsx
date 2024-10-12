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
	const { replace, pathName } = useTable();

	const handleClick = () => {
		toggleDropDown(id);
		console.log(pathName);
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
