import UserData from "@/app/_backend/data/users/user.data";
import { getSessions } from "@/app/_backend/utils/sessions";
import React from "react";
import CreateProducts from "../../view/modals/createProducts";

async function DashBoardPage() {
	const loggedInUser = await UserData();
	console.log(loggedInUser);
	return (
		<div>
			<h1> welcome  {loggedInUser?.username}</h1>
		</div>
	);
}

export default DashBoardPage;
