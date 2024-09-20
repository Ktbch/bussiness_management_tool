"use client";

import { DashBoardInnerNavigation } from "./navigation/_dashBoradInner-navigation";

interface IProps {
	children: React.ReactNode;
	title: string;
	home: string;
}

export const DashBordContentLayout = ({ children, title, home }: IProps) => {
	return (
		<div className="flex flex-col items-start w-full gap-5">
			<div className="flex flex-col items-start ">
				<h1 className="text-3xl font-bold">
					{title}
				</h1>
				<DashBoardInnerNavigation home={home} />
			</div>
			{children}
		</div>
	);
};
