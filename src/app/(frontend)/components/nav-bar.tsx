"use client";

import { SystemIconsCmp } from "../design-system/_components/SystemIcons";

export default function NavBar() {
	return (
		<nav className="fixed left-[90%] top-2">
			<div className="flex items-center gap-2 ">
				<button className="relative bg-slate-400 rounded-full p-3">
					<SystemIconsCmp icon="notificationIcon" iconStyle="h-5 w-5" />
					<span className="absolute top-1">0</span>
				</button>
				<SystemIconsCmp icon="settingsIcon" iconStyle="h-5 w-5" />
			</div>
		</nav>
	);
}
