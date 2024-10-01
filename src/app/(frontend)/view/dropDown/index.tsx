import { TOption } from "../../design-system/app/dashboard-app/components/table/constansts";

interface IProps {
	button: React.JSX.Element;
	options: {
		option: TOption;
		func: () => void;
	}[];
	isDropDownActive: boolean;
	// on: () => void;
}

const DropDownItems = ({
	options
}: {
	options: {
		option: TOption;
		func: () => void;
	};
}) => {
	const { option } = options;
	return (
		<button
			onClick={options.func}
			className={`flex flex-col px-10 py-2  border w-[100%] bg-neturalColor text-netualColor2 items-start`}>
			{option}
		</button>
	);
};

export default function DropDwonCmp({
	button,
	options,
	isDropDownActive
}: IProps) {
	return (
		<div className="relative">
			{button}
			<div className="absolute  z-10 transition-all">
				{isDropDownActive &&
					options.map((option, index) =>
						<DropDownItems options={option} key={index} />
					)}
			</div>
		</div>
	);
}
