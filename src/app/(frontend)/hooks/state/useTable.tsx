"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useToggle } from "./useToggle";
import { useItemIdentifier } from "../../context/items-identifier/itemsIdentifier";
import { useModalActionContext } from "../../context/modal/modal-context";

export const useTable = () => {
	const { isOn, on, off } = useModalActionContext();
	const [modalCmp, setModalCmp] = useState<React.JSX.Element>();

	const [isSelected, setSelected] = useState(false);
	const { refresh, replace } = useRouter();
	const pathName = usePathname();
	const [dropwDownState, setDropDown] = useState<{ [key: number]: boolean }>(
		{}
	);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const { identifier, memorizeIdentifier } = useItemIdentifier();

	const toggleDropDown = (id: number) => {
		setDropDown(prevState => ({ [id]: !prevState[id] }));
		return;
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// If the click is outside the dropdown, close it
			// console.log("hello");
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setDropDown({ 2: false });
			}
		};

		// Add click event listener to detect outside clicks
		document.addEventListener("mousedown", handleClickOutside);

		// Cleanup the event listener on unmount
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return {
		isOn,
		on,
		off,
		modalCmp,
		setModalCmp,
		refresh,
		dropwDownState,
		setDropDown,
		toggleDropDown,
		isSelected,
		setSelected,
		replace,
		pathName,
		identifier,
		memorizeIdentifier
	};
};
