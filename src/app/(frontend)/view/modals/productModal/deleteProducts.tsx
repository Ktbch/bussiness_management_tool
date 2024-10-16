"use client";

import { deleteProduct } from "@/app/_backend/actions/product.action";
import DeleteModal from "../deleteModal";
import { useModalActionContext } from "@/app/(frontend)/context/modal/modal-context";
import { useItemIdentifier } from "@/app/(frontend)/context/items-identifier/itemsIdentifier";

export default function DeleteProducts() {
	const { off } = useModalActionContext();
	const { identifier } = useItemIdentifier();
	return (
		<DeleteModal mutateFunc={deleteProduct} off={off} identifier={identifier} />
	);
}
