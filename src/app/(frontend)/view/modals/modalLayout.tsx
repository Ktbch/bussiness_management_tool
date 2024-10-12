"use client";
import React from "react";
import { SystemIconsCmp } from "../../design-system/_components/SystemIcons";
import { useItemIdentifier } from "../../context/items-identifier/itemsIdentifier";

interface IProps {
	children: React.ReactNode;
	isOn: boolean;
	off: () => void;
	title: string;
}

const CancelButton = ({ off }: { off: () => void }) => {
	return (
		<button onClick={off}>
			<SystemIconsCmp icon="cancelIcon" iconStyle="w-5 h-5" />
		</button>
	);
};

export default function ModalLayout({ children, isOn, off, title }: IProps) {
	const { identifier } = useItemIdentifier();
	return (
		<div
			className={` ${isOn
				? "block"
				: "hidden"}   overflow-y-auto overflow-x-hidden  top-0 right-0 left-0  justify-center w-full md:inset-0 h-auto max-h-full  fixed inset-0 bg-black bg-opacity-50 flex items-center  z-50  transition-all`}>
			<div className="relative p-4 w-full max-w-2xl max-h-full">
				<div className="relative p-4 bg-white rounded-lg shadow sm:p-5 ">
					<div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
						<h1>
							{title}
						</h1>
						<div className="absolute top-6 left-[90%]">
							<CancelButton off={off} />
						</div>
					</div>
					{children}
				</div>
			</div>
		</div>
	);
}
