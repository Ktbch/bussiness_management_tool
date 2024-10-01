"use client";

import ModalLayout from "@/app/(frontend)/view/modals/modalLayout";
import { SystemIconsCmp } from "../../../_components/SystemIcons";

import { ReactNode } from "react";
import { useToggle } from "@/app/(frontend)/hooks/state/useToggle";

interface IProps {
	resource: string;
	children: ReactNode;
	jsxElement: ({ off }: { off: () => void }) => React.JSX.Element;
}

// TYPES AND REFACTOR LATER
export default function DashBoardBody({
	resource,
	children,
	jsxElement
}: IProps) {
	const { on, isOn, off } = useToggle();

	return (
		<section>
			<div className="flex flex-col items-start gap-10 w-full">
				<div className="flex items-center w-full justify-between">
					<h3 className="capitalize font-bold text-secondaryColor">
						{resource} Table
					</h3>
					<ModalLayout isOn={isOn} off={off} title={`Add ${resource}`}>
						{jsxElement({ off })}
					</ModalLayout>
					<button
						className="flex flex-row-reverse items-center gap-3 border mb-10 p-3"
						onClick={on}>
						<SystemIconsCmp icon="plusIcon" iconStyle="" />
					</button>
				</div>
			</div>
			{children}
		</section>
	);
}

// TODO DO THIS ONE FOR THE INVENTORY THEN ON FOR THE BILLING IT IS CALLED REUSEABLE COMPONENT WE ARE USING WET
