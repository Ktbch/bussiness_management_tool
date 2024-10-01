"use server";

import SiginView from "../../view/Signin";
import { signIn } from "@/app/_backend/actions/auth";

export type TUser = {
	id: number;
	username: string;
	password: string;
};

const Auth = async () => {
	return <SiginView signIn={signIn} />;
};

export default Auth;
