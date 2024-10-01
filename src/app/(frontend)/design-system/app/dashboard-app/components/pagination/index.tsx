"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PaganiationBtn from "../../paganiation";

// TODO ANALYASE IF THESE IS WELL OPMTIMIZED

interface IProps {
	quantity: number;
}

export const PaginationCmp = ({ quantity }: IProps) => {
	const [page, setPage] = useState(0);

	const { replace } = useRouter();
	replace(`/dashboard/inventory-management?page=${page}`);

	const totalPages = Math.round(quantity / 4);
	console.log(totalPages);

	return (
		<div className="flex items-center gap-5">
			<span className="text-sm">
				pages {page + 1} of {totalPages}
			</span>
			<PaganiationBtn page={page} setPage={setPage} totalPages={totalPages} />
		</div>
	);
};
