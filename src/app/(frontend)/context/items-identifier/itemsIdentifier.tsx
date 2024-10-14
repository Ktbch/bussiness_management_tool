"use client";

// create context
// create context provider
// create context hook

import React, { createContext, useContext, useState } from "react";

interface IItemIdentifier {
	identifier: number;
	memorizeIdentifier: (id: number) => void;
	memoIdentifier: number;
}

const initalState: IItemIdentifier = {
	identifier: 0,
	memorizeIdentifier() {},
	memoIdentifier: 0
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

		const memoIdentifier = React.useMemo(() => identifier, [setIdentifier]);
		console.log(identifier);
		const value = {
			identifier,
			memorizeIdentifier,
			memoIdentifier
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
