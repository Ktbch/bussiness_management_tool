"use client";

import { IToggleItemsDisplayConfig } from "./types";

export default function DropDownToggleItemsDisplay({
	items
}: IToggleItemsDisplayConfig) {
	return (
		<div className="flex items-start gap-5 border p-3">
			{items.map((item, index) =>
				<span key={index}>
					{item}
				</span>
			)}
		</div>
	);
}
