"use client";

import { useState } from "react";
import { PaginationCmp } from "../../paganiation";
import { usePathname, useRouter } from "next/navigation";

export const TableFooter = ({ quantity }: { quantity: number }) => {
	const [page, setPage] = useState(0);
	const { replace } = useRouter();
	const pathname = usePathname();

	replace(`${pathname}?page=${page}`);
	return (
		<tfoot>
			<tr className="border w-full">
				<td className="py-3 pl-3 w-full ml-auto">
					<PaginationCmp quantity={quantity!} page={page} setPage={setPage} />
				</td>
			</tr>
		</tfoot>
	);
};
