"use client";

import { OPTIONS_CONSTANTS_OBJECT } from "@/app/(frontend)/constants";
import { CreateOrderFields } from "@/app/(frontend)/constants/form-constants";
import { useItemIdentifier } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";
import { useModalActionContext } from "@/app/(frontend)/context/modal/modal-context";
import FormSchema from "@/app/(frontend)/design-system/_components/form-components";
import { useMutation } from "@/app/(frontend)/hooks/useMutation";
import { updateOrderAction } from "@/app/_backend/actions/create-order.action";
import React from "react";

const UpdateOrder = () => {
	const { off } = useModalActionContext();
	const { handleMutation, state } = useMutation(updateOrderAction, off);
	const { identifier } = useItemIdentifier();

	return (
		<FormSchema
			actionFn={formData => {
				handleMutation({ formData, productId: identifier });
			}}
			state={state}
			className="border p-3 w-full "
			fields={CreateOrderFields}
			options={OPTIONS_CONSTANTS_OBJECT.TRANSACTION_STATUS}
			crudStyles="grid gap-2 mb-4 sm:grid-cols-2"
		/>
	);
};

export default UpdateOrder;
