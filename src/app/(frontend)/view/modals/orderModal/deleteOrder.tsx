"use client";

import { deleteOrder } from "@/app/_backend/actions/create-order.action";
import DeleteModal from "../deleteModal";
import { useItemIdentifier } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";
import { useModalActionContext } from "@/app/(frontend)/context/modal/modal-context";

export default function DeleteOrder() {
	const { identifier } = useItemIdentifier();
	const { off } = useModalActionContext();
	return (
		<DeleteModal mutateFunc={deleteOrder} identifier={identifier} off={off} />
	);
}
