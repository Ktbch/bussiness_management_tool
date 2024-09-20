"use client";

import { useRouter } from "next/navigation";
import { SystemIconsCmp } from "../../../_components/SystemIcons";
import Link from "next/link";

export const DashBoardInnerNavigation = ({ home }: { home: string }) => {
	const router = useRouter();

	return (
		<div className="flex items-center gap-3 text-sm">
			<button onClick={() => router.back()} className="flex items-center ">
				<SystemIconsCmp icon="Left" iconStyle="h-5 " />
				<span>back</span>
			</button>
			<Link href={home}>Home</Link>
		</div>
	);
};
