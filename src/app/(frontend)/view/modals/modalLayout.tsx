"use client";
import React from "react";
import ModalOpenButton from "../../components/button/modal-open-button";
import { useToggle } from "../../hooks/state/useToggle";
import { SystemIconsCmp } from "../../design-system/_components/SystemIcons";
import { SystemIconsKeys } from "../../constants/icons";
import { useBlurContext } from "../../context/blur/blur.context";
import { AppBlur } from "../../components/app-blur";

interface IProps {
	children: React.ReactNode;
	modalButtonIcon: SystemIconsKeys;
	modalButtonName: string;
	modalButtonClassName: string;
}

const CancelButton = ({ off }: { off: () => void }) => {
	return (
		<button onClick={off}>
			<SystemIconsCmp icon="cancelIcon" iconStyle="w-5 h-5" />
		</button>
	);
};

export default function ModalLayout({
	children,
	modalButtonIcon,
	modalButtonName,
	modalButtonClassName
}: IProps) {
	const { isOn, on, off } = useToggle();
//    TODO BLUR
	return (
		<>
			<div
				className={` ${isOn
					? "block blur-0 "
					: "hidden"} fixed blur-0 top-[5%]  bg-slate-400 rounded-md left-[40%] border p-3 transition-all duration-100 ease-in-out `}>
				{children}
				<div className="absolute top-6 left-[80%]">
					<CancelButton off={off} />
				</div>
			</div>
			<ModalOpenButton on={on} className={modalButtonClassName}>
				{modalButtonName}
				<SystemIconsCmp icon={modalButtonIcon} iconStyle="h-5 w-5" />
			</ModalOpenButton>
		</>
	);
}
