"use client";

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
