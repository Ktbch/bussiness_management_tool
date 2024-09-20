"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../_components/dashboard-components/sidebar";

interface IProps {
	children: React.ReactNode;
}

export const DashBoardApp = ({ children }: IProps) => {
	const [isFullWidth, setFullWidth] = useState(false);

	const isClient = typeof window !== "undefined";

	useEffect(
		() => {
			setFullWidth(true);
		},
		[isClient]
	);
	return (
		<div className="" id="gaussian-portal-0">
			<div className="flex w-full flex-row">
				<Sidebar isFullWidth={isFullWidth} setFullWidth={setFullWidth} />
				<div
					className={`block min-h-dvh bg-foundation p-4 transition-all  ${isFullWidth
						? " ml-[65px] lg:ml-[235px] w-[40rem] lg:w-[100rem]"
						: "lg:ml-[55px] w-[40rem] lg:w-[70em]"}`}>
					{children}
				</div>
			</div>
		</div>
	);
};
