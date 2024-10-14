"use client";

interface IProps {
	toastMessage: string;
}
export const ToastCmp = ({ toastMessage }: IProps) => {
	// TODO USE TYPE TO MANIPULATE THE COLORS IF THE TOAST

	return (
		<div
			className={`fixed ${toastMessage
				? " overflow-y-auto overflow-x-hidden  top-0 right-0 left-0  justify-center w-full md:inset-0 h-auto max-h-full  fixed inset-0 bg-black bg-opacity-50 flex items-center  z-50  transition-all"
				: ""}  left-[45%]`}>
			<div className="border p-3 border-sucessColor bg-neturalColor text-sucessColor font-bold rounded-md">
				<div className=" p-3 capitalize text-center text-sm">
					{toastMessage}
				</div>
			</div>
		</div>
	);
};
