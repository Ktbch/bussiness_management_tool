"use client";

import { useFormState} from "react-dom";
import FormSchema from "../../design-system/_components/form-components";
import { Siginfields } from "../../constants/form-constants";
import { FormState } from "../../design-system/_components/form-components/types";

interface IProps  {
	signIn: (state: FormState, formdata: FormData)=> Promise<FormState>
}

const SiginView = ({signIn}:IProps) => {
	const [state, action] = useFormState(signIn, undefined);
   
	return (
		<>
		<FormSchema
			actionFn={action}
			className="border outline-none p-3 rounded-sm"
			fields={Siginfields}
			state={state}
			/>
		</>
	);
};


export default SiginView;
