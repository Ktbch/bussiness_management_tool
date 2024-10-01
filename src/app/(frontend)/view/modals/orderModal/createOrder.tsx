"use client";

import { CreateOrderFields } from "@/app/(frontend)/constants/form-constants";
import FormSchema from "@/app/(frontend)/design-system/_components/form-components";
import { useMutation } from "@/app/(frontend)/hooks/useMutation";
import createOrderAction from "@/app/_backend/actions/create-order.action";

export default function CreateOrders({ off }: { off: () => void }) {
	// Refactor this that the main funvtion will be passed form a server component

	const { handleMutation, state } = useMutation(createOrderAction, off);

	return (
		<FormSchema
			actionFn={handleMutation}
			state={state}
			className="border p-3 w-full"
			fields={CreateOrderFields}
			options={["paid", "unpaid"]}
			crudStyles="grid gap-2 mb-4 sm:grid-cols-2"
		/>
	);
}
