import React, { ReactNode } from "react";
import { DashBoardApp } from "../../design-system/app/dashboard-app";
import { BlurContext } from "../../context/blur/blur.context";
import { ToastProvider } from "../../context/toast/toast.context";

const DashBoardlayout = ({ children }: { children: ReactNode }) => {
	return (
		<ToastProvider>
			<DashBoardApp>
				{children}
			</DashBoardApp>
		</ToastProvider>
	);
};

export default DashBoardlayout;
