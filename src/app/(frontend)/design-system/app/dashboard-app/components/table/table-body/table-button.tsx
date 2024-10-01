import { SystemIconsCmp } from "@/app/(frontend)/design-system/_components/SystemIcons";

export const TableOptionButton = ({
	toggleDropDown,
	id
}: {
	toggleDropDown: (id: number) => void;
	id: number;
}) => {
	return (
		<td className="border text-center lg:px-5 lg:py-2 cursor-pointer">
			<button
				className="flex flex-row-reverse items-center"
				onClick={() => toggleDropDown(id)}>
				<SystemIconsCmp icon="dotIcon" iconStyle="" />
			</button>
		</td>
	);
};
