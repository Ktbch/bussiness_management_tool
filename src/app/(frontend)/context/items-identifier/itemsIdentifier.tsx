"use client";

// create context
// create context provider
// create context hook

import { createContext, useContext, useState } from "react";

interface IItemIdentifier {
	identifier: number;
	setIdentifier: (value: number) => void;
}

const initalState: IItemIdentifier = {
	identifier: 0,
	setIdentifier() {}
};
const itemIdentifier = createContext(initalState);

export const ItemIdentifierProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [identifier, setIdentifier] = useState<number>(0);

	const value = {
		identifier,
		setIdentifier
	};
	return <itemIdentifier.Provider value={value} />;
};

export const useItemIdentifier = () => {
	return useContext(itemIdentifier);
};
