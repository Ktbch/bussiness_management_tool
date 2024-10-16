"use client";

import { Product, SalesOrder } from "@/app/_backend/database/schema/types";
import { useEffect, useState, useCallback } from "react";
import { useItemIdentifier } from "../../context/items-identifier/itemsIdentifier";

type TGetDataFunc<T> = (id: number) => Promise<T>;

export default function useGetData<T>(
	getDataFunc: TGetDataFunc<T>,
	id: number
) {
	const [data, setData] = useState<T>();
	const getData = useCallback(
		async () => {
			const dataFetched = await getDataFunc(id);
			setData(dataFetched);
		},
		[id]
	);
	useEffect(
		() => {
			getData();
		},
		[id]
	);
	return data;
}
