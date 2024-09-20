"use client";

import Link from "next/link";
import { INavigationConfig } from "./types";
import { SystemIconsCmp } from "../../../_components/SystemIcons";

interface IProps {
	navigationItems: INavigationConfig[];
	isFullWidth: boolean;
}
export default function RenderNavigation({
	navigationItems,
	isFullWidth
}: IProps) {
	return (
		<ul className="flex flex-col items-start pb-10 gap-5">
			{navigationItems.map((navigationItem, index) =>
				<li key={index}>
					<Link href={navigationItem.href}>
						<div
							className={`${isFullWidth
								? "flex"
								: "hidden lg:flex"} flex items-center gap-5`}>
							<SystemIconsCmp icon={navigationItem.icon} iconStyle="h6 w-6" />
							<span className={`hidden ${isFullWidth && "lg:block"} `}>
								{navigationItem.navItemName}
							</span>
						</div>
					</Link>
				</li>
			)}
		</ul>
	);
}
