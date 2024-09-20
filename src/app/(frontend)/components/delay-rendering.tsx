"use client";

import { ReactNode, useEffect, useState } from "react";

interface IProps {
	children: ReactNode;
	delayWait: number;
}

export default function DelayRender({ children, delayWait }: IProps) {
	const [delayed, setDelayed] = useState(true);
	useEffect(
		() => {
			const timer = setTimeout(() => setDelayed(false), delayWait);

			return () => {
				clearTimeout(timer);
			};
		},
		[delayed]
	);

	return !delayed && children;
}
