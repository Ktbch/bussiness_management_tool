"use client";

import { useItemIdentifier } from "../../context/items-identifier/itemsIdentifier";
import { TOption } from "../../design-system/app/dashboard-app/components/table/constansts";

interface IProps {
	button: React.JSX.Element;
	options: {
		option: TOption;
		func: () => void;
	}[];
	isDropDownActive: boolean;
	tableDataId: number;
	// on: () => void;
}

const DropDownItems = ({
	options,
	tableDataId
}: {
	options: {
		option: TOption;
		func: () => void;
	};
	tableDataId: number;
}) => {
	const { option } = options;
	const { memorizeIdentifier } = useItemIdentifier();

	const handleClick = () => {
		memorizeIdentifier(tableDataId);
		options.func();
	};
	return (
		<button
			onClick={handleClick}
			className={`flex flex-col px-10 py-2  border w-[100%] bg-neturalColor text-netualColor2 items-start`}>
			{option}
		</button>
	);
};

export default function DropDwonCmp({
	button,
	options,
	isDropDownActive,
	tableDataId
}: IProps) {
	return (
		<div className="relative">
			{button}
			<div className="absolute  z-10 transition-all">
				{isDropDownActive &&
					options.map((option, index) =>
						<DropDownItems
							options={option}
							key={index}
							tableDataId={tableDataId}
						/>
					)}
			</div>
		</div>
	);
}
