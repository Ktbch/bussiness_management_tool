"use client";
interface IProps {
	pending: boolean;
	buttonName: string;
	pendingtext: string;
	className?: string;
}

export const SubmitButton = ({
	pending,
	pendingtext,
	buttonName,
	className
}: IProps) => {
	return (
		<button
			disabled={pending}
			type="submit"
			className={`border w-full h-10 ${className}`}>
			{pending ? pendingtext : buttonName}
		</button>
	);
};
