"use client";

import DelayRender from "@/app/(frontend)/components/delay-rendering";
import React from "react";

export default function loading() {
	return (
		<DelayRender delayWait={100}>
			<div>Loading</div>
		</DelayRender>
	);
}
