import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="absolute left-[10%] top-52 md:left-[30%] md:top-32 lg:left-[40%]  mx-auto p-5 border">
			<h1 className="w-full text-center pb-10 font-bold text-primaryColor">
				Sigin In
			</h1>
			<div className="flex flex-col items-start gap-10">
				{children}
			</div>
		</div>
	);
};

export default layout;
