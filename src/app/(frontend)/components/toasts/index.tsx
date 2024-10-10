"use client";

interface IProps {
	toastMessage: string;
}
export const ToastCmp = ({ toastMessage }: IProps) => {
	// TODO USE TYPE TO MANIPULATE THE COLORS IF THE TOAST

	return (
		<div
			className={`fixed ${toastMessage
				? "top-5"
				: "-top-20"} border p-3 border-sucessColor bg-neturalColor text-sucessColor font-bold rounded-md  transition-all  left-[45%]`}>
			<div className=" p-3 capitalize text-center text-sm">
				{toastMessage}
			</div>
		</div>
	);
};
