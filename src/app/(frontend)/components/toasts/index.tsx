"use client";

interface IProps {
	type: "error" | "success" | "warning" | "info" | null;
	toastMessage: string;
}
export const ToastCmp = ({ type, toastMessage }: IProps) => {
	// TODO USE TYPE TO MANIPULATE THE COLORS IF THE TOAST
	return (
		<div className={`fixed top-[80%] left-[83%]`}>
			<div className="border p-3 w-48 text-center">
				{toastMessage}
			</div>
		</div>
	);
};
