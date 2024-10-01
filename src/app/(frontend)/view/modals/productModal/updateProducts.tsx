"use client";

import { updateProduct } from "@/app/_backend/actions/product.action";
import FormSchema from "@/app/(frontend)/design-system/_components/form-components";
import { UpdateProductFields } from "@/app/(frontend)/constants/form-constants";
import { useMutation } from "@/app/(frontend)/hooks/useMutation";

export default function UpdateProducts() {
	const { handleMutation, state } = useMutation(updateProduct);

	return (
		<FormSchema
			actionFn={formData => {
				handleMutation(formData);
			}}
			state={state}
			className="border p-3 w-full "
			fields={UpdateProductFields}
			crudStyles="grid gap-2 mb-4 sm:grid-cols-2"
		/>
	);
}
