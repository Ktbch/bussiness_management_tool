// TODO MORE WORK TO MAKE THIS REUSEABLE let the custom interceptor take unique components and unique functions
"use client";

import { useTable } from "../../hooks/state/useTable";

interface IInterceptorMessageConfig {
	continueFunc: () => void;
	off: () => void;
	message?: string;
}

export const InterceptorMessage = ({
	off,
	continueFunc,
	message
}: IInterceptorMessageConfig) => {
	const { refresh } = useTable();

	const handleClick = async (response: "yes" | "no") => {
		if (response == "yes") {
			continueFunc();
			// off();
			refresh();
			return;
		}
		off();
	};
	return (
		<div className="flex items-center flex-col gap-3">
			<p>
				{message}
			</p>
			<div className="flex items-start gap-2">
				<button
					onClick={async () => handleClick("yes")}
					className="border bg-errorColor text-neturalColor rounded-lg p-3">
					Delete
				</button>
				<button
					onClick={off}
					className="border bg-neturalColor text-netualColor2 rounded-lg p-3">
					Cancel
				</button>
			</div>
		</div>
	);
};
