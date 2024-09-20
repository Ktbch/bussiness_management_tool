"use client";

import { SystemIconsCmp } from "../../design-system/_components/SystemIcons";
import { useToggle } from "../../hooks/state/useToggle";

interface IProps {
	on: () => void;
	className: string;
	children: React.ReactNode;
}
export default function ModalOpenButton({ on, className, children }: IProps) {
	return (
		<button className={className} onClick={on}>
			{children}
		</button>
	);
}
