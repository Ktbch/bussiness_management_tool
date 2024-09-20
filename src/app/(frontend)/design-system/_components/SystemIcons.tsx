import { SystemIconsKeys, systemIconsToSvg } from "../../constants/icons";

export const SystemIconsCmp = ({
	icon,
	iconStyle
}: {
	icon: SystemIconsKeys;
	iconStyle: string;
}) => {
	const iconSvg = systemIconsToSvg(icon, iconStyle);
	return (
		<i className="w-6 h-6" dangerouslySetInnerHTML={{ __html: iconSvg }} />
	);
};
