"use client";

import { Dispatch, SetStateAction } from "react";
import { SystemIconsCmp } from "../../_components/SystemIcons";

// TODO ANALYASE IF THESE IS WELL OPMTIMIZED
// TODO FIX THIS COMPONENT

interface IProps {
	quantity: number;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
}
interface PAGNITAION {
	page: number;
	totalPages: number;
	setPage: Dispatch<SetStateAction<number>>;
}

// fix this pagination
export default function PaganiationBtn({ page, setPage }: PAGNITAION) {
	return (
		<div className="flex items-center gap-1">
			<button
				className={`${page === 0 ? "hidden" : "block"} text-accentColor `}
				onClick={() => setPage(prevState => prevState - 1)}>
				<SystemIconsCmp icon="Left" iconStyle="h-4 w-4" />
			</button>
			<button
				className={` block text-accentColor`}
				onClick={() => setPage(prevState => prevState + 1)}>
				<SystemIconsCmp icon="Right" iconStyle="h-4 w-4" />
			</button>
		</div>
	);
}

export const PaginationCmp = ({ quantity, page, setPage }: IProps) => {
	const totalPages = Math.round(quantity / 4);

	// console.log(page);
	// console.log(quantity);

	return (
		<div className="flex items-center gap-5">
			<span className="text-sm text-netualColor2">
				pages {page + 1} of {totalPages}
			</span>
			<PaganiationBtn page={page} setPage={setPage} totalPages={totalPages} />
		</div>
	);
};
