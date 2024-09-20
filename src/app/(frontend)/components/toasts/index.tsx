"use client";

import { useEffect } from "react";
import { useToggle } from "../../hooks/state/useToggle";

interface IProps {
	type: "error" | "success" | "warning" | "info" | null;
	toastMessage: string;
}
export const ToastCmp = ({ type, toastMessage }: IProps) => {
	// TODO USE TYPE TO MANIPULATE THE COLORS IF THE TOAST
	const { isOn, on, off } = useToggle();

	useEffect(() => {
		if (toastMessage.length !== 0) {
			on();
			setTimeout(() => off(), 5000);
			return;
		} else {
			off();
		}
	}, []);
	return (
		<div
			className={` ${type === "success"
				? "border-green-500"
				: type === "error"
					? "bg-red-400"
					: "bg-yellow-400"} px-10 border fixed ${isOn
				? "top-5"
				: "-top-20"} transition-all  left-[45%]`}>
			<div className=" p-3 capitalize text-center text-sm">
				{toastMessage}
			</div>
		</div>
	);
};
