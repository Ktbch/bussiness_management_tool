import React from "react";
import { Skeleton } from "../../../_components/skeleton";
// TODO
export default function TableSkeleton({ rows = 5, column = 5 }) {
	return (
		<table>
			<thead>
				<tr>
					{Array.from({
						length: column
					}).map((_, index) =>
						<th key={index} className="lg:px-10 border py-3 capitalize">
							<Skeleton className="h-4 w-4" />
						</th>
					)}
				</tr>
			</thead>
			<tbody>
				<tr className="lg:px-10 border py-3 capitalize">
					{Array.from({
						length: rows
					}).map((_, index) =>
						<td
							key={index}
							scope="row"
							className="border text-center lg:px-5 py-2">
							<Skeleton />
						</td>
					)}
				</tr>
			</tbody>
		</table>
	);
}
