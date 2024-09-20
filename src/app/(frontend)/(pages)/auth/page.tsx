import SiginView from "../../view/Signin";
import { signIn } from "@/app/_backend/actions/auth";

const Auth = () => {
	return <SiginView signIn={signIn} />;
};

export default Auth;
