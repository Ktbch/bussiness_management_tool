"use client";

import { updateProduct } from "@/app/_backend/actions/product.action";
import FormSchema from "@/app/(frontend)/design-system/_components/form-components";
import { UpdateProductFields } from "@/app/(frontend)/constants/form-constants";
import { useMutation } from "@/app/(frontend)/hooks/useMutation";
import { OPTIONS_CONSTANTS_OBJECT } from "@/app/(frontend)/constants";
import { useItemIdentifier } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";
import { useModalActionContext } from "@/app/(frontend)/context/modal/modal-context";

export const UpdateProducts = () => {
	const { off } = useModalActionContext();
	const { handleMutation, state } = useMutation(updateProduct, off);
	const { identifier } = useItemIdentifier();

	return (
		<FormSchema
			actionFn={formData => {
				handleMutation({ formData, productId: identifier });
			}}
			state={state}
			className="border p-3 w-full "
			fields={UpdateProductFields}
			options={OPTIONS_CONSTANTS_OBJECT.PRODUCT_STOCK_STATUS}
			crudStyles="grid gap-2 mb-4 sm:grid-cols-2"
		/>
	);
};
