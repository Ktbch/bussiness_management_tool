"use client";

import { useRouter } from "next/navigation";
import { SystemIconsCmp } from "../../../../_components/SystemIcons";
import Link from "next/link";

export const DashBoardInnerNavigation = ({ home }: { home: string }) => {
	const router = useRouter();

	return (
		<div className="flex items-center gap-3 text-sm text-secondaryColor ">
			<button
				onClick={() => router.back()}
				className="flex items-center hover:text-accentColor transition-all duration-75 ease-in-out">
				<SystemIconsCmp icon="Left" iconStyle="h-5 " />
				<span>back</span>
			</button>
			<Link
				href={home}
				className="hover:text-accentColor transition-all duration-75 ease-in-out">
				Home
			</Link>
		</div>
	);
};
