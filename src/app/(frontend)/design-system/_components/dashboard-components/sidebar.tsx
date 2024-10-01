import React, { Dispatch, SetStateAction } from "react";
import RenderNavigation from "../../app/dashboard-app/components/navigation";
import { sideBarNavigationItems } from "../../app/dashboard-app/components/navigation/constants";
import { SystemIconsCmp } from "../SystemIcons";

interface IProps {
	isFullWidth: boolean;
	setFullWidth: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ isFullWidth, setFullWidth }: IProps) => {
	// const handleKeyPress = useCallback(
	// 	(e: KeyboardEvent) => {
	// 		if ((e.ctrlKey || e.metaKey) && e.keyCode === 66) {
	// 			setFullWidth(prevState => !prevState);
	// 		}
	// 	},
	// 	[isFullWidth]
	// );
	// //    TODO FIND OUT WHATS HAPPENNG HERE
	// useEffect(
	// 	() => {
	// 		document.addEventListener("keydown", handleKeyPress);
	// 		return () => {
	// 			document.removeEventListener("keydown", handleKeyPress);
	// 		};
	// 	},
	// 	[handleKeyPress]
	// );
	return (
		<aside
			id="gaussian-portal-1"
			className={`fixed min-h-dvh transition-all border ${isFullWidth
				? "w-[55px] max-w-[55px] min-w-[55px] lg:w-[235px] lg:max-w-[235px] lg:min-w-[235px]"
				: " w-[0] lg:w-[55px] lg:max-w-[55px] lg:min-w-[55px] "} bg-primaryColor`}>
			<div className="flex flex-col h-[50px] items-center justify-center">
				<div className="text-center px-10 text-sm w-full mt-56 pb-10 flex items-center gap-3">
					{/* <SystemIconsCmp icon="Home" iconStyle="h-6 w-6" /> */}
					{isFullWidth && <span>Sope Inevntory and Billing App</span>}
				</div>
				<RenderNavigation
					navigationItems={sideBarNavigationItems}
					isFullWidth={isFullWidth}
				/>
				<button
					className="absolute top-0 left-[100%]"
					onClick={() => setFullWidth(!isFullWidth)}
					type="button">
					<SystemIconsCmp icon="menuBar" iconStyle="h-6 w-6 text-black" />
				</button>
			</div>
		</aside>
	);
};

export default Sidebar;
