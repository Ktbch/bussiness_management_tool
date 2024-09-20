// this system applies to every component that has need for toggle like dropdowns modalsdarkMode and all others
"use client";

import { useState } from "react";

interface IProps {
	toggled: boolean;
	children?: React.ReactNode;
	cmpToClick?: React.ReactNode;
	className?: string;
	// toggleType: "modal" | "dropdown" | "theme";
}

const ToggleItems = ({ toggled, children, className }: IProps) => {
	return (
		<div className={toggled ? `block ${className} ` : "hidden"}>
			{children}
		</div>
	);
};

export default function ToggleCmp({ toggled, children, className }: IProps) {
	// TODO WRITE THE LOGIC FOR CHANGING THE THEME OF THE APPLICATION
	//  Refactor this components

	if (toggled)
		return (
			<ToggleItems
				toggled={toggled}
				children={children}
				className={className}
			/>
		);

	return <ToggleItems toggled={toggled} children={children} />;
}
