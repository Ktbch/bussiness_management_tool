"use client";

import { createProduct } from "@/app/_backend/actions/product.action";
import FormSchema from "@/app/(frontend)/design-system/_components/form-components";
import { CreateProductFields } from "@/app/(frontend)/constants/form-constants";
import { useMutation } from "@/app/(frontend)/hooks/useMutation";

export default function CreateProducts({ off }: { off: () => void }) {
	const { handleMutation, state } = useMutation(createProduct, off);

	return (
		<FormSchema
			actionFn={formData => {
				handleMutation(formData);
			}}
			state={state}
			className="border p-3 w-full "
			fields={CreateProductFields}
			options={["full stock", "average stock", "high stock"]}
			crudStyles="grid gap-2 mb-4 sm:grid-cols-2"
		/>
	);
}
