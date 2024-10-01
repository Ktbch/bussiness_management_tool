import React, { ReactNode } from "react";
import { DashBoardApp } from "../../design-system/app/dashboard-app";
import { ToastProvider } from "../../context/toast/toast.context";
import NavBar from "../../components/nav-bar";

const DashBoardlayout = ({ children }: { children: ReactNode }) => {
	return (
		<ToastProvider>
			<DashBoardApp>
				<NavBar />
				{children}
			</DashBoardApp>
		</ToastProvider>
	);
};

export default DashBoardlayout;
