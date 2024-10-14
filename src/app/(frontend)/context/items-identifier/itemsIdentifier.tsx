"use client";

// create context
// create context provider
// create context hook

import React, { createContext, useContext, useState } from "react";

interface IItemIdentifier {
	identifier: number;
	memorizeIdentifier: (id: number) => void;
}

const initalState: IItemIdentifier = {
	identifier: 0,
	memorizeIdentifier() {}
};
const itemIdentifier = createContext(initalState);

export const ItemIdentifierProvider = React.memo(
	({ children }: { children: React.ReactNode }) => {
		// TODO OPTIMIZE THIS LATER
		const [identifier, setIdentifier] = useState<number>(0);

		const memorizeIdentifier = React.useCallback(
			(id: number) => setIdentifier(id),
			[identifier]
		);

		localStorage.setItem("id", JSON.stringify(identifier));

		const value = {
			identifier,
			memorizeIdentifier
		};
		return (
			<itemIdentifier.Provider value={value}>
				{children}
			</itemIdentifier.Provider>
		);
	}
);

export const useItemIdentifier = () => {
	return useContext(itemIdentifier);
};
