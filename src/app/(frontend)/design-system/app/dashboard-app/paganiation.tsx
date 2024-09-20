"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

// TODO ANALYASE IF THESE IS WELL OPMTIMIZED

interface IProps {
	quantity: number;
}
interface PAGNITAION {
	page: number;
	totalPages: number;
	setPage: Dispatch<SetStateAction<number>>;
}
export default function PaganiationBtn({
	page,
	setPage,
	totalPages
}: PAGNITAION) {
	return (
		<div className="flex items-center gap-5">
			<button
				className={`${page === 0 ? "hidden" : "block"} `}
				onClick={() => setPage(prevState => prevState - 1)}>
				Prev
			</button>
			<button
				className={`${totalPages - 1 === page ? "hidden" : "block"}`}
				onClick={() => setPage(prevState => prevState + 1)}>
				Next
			</button>
		</div>
	);
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
