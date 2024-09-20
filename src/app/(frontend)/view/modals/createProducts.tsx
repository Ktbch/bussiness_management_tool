"use client";

import { useFormState } from "react-dom";
import FormSchema from "../../design-system/_components/form-components";
import productAction from "@/app/_backend/actions/product.action";
import { CreateProductFields } from "../../constants/form-constants";

export default function CreateProducts() {
	const [state, action] = useFormState(productAction, undefined);

	return (
		<FormSchema
			actionFn={action}
			state={state}
			className="border bg-slate-900 "
			fields={CreateProductFields}
		/>
	);
}
