"use client";

import { useFormStatus } from "react-dom";

interface IProps {
	buttonName: string;
	pendingtext: string;
	className?: string;
}

export const SubmitButton = ({
	pendingtext,
	buttonName,
	className
}: IProps) => {
	const { pending } = useFormStatus();
	console.log(pending);
	return (
		<button
			disabled={pending}
			type="submit"
			className={`border w-full h-10 ${className}`}>
			{pending ? pendingtext : buttonName}
		</button>
	);
};
