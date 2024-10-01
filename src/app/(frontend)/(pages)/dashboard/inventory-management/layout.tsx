import { DashBordContentLayout } from "@/app/(frontend)/design-system/app/dashboard-app/_layout/_dashboard-layout";
import React from "react";

const InevntoryManagementLayout = ({
	children
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="conatiner mx-auto px-5  py-5 w-full">
			<DashBordContentLayout
				title="Inventory Management Service"
				home="/dashboard/inventory-management">
				{children}
			</DashBordContentLayout>
		</div>
	);
};

export default InevntoryManagementLayout;
