"use client";

import { createContext, ReactNode, useContext } from "react";
import { useToggle } from "../../hooks/state/useToggle";

interface IBlurContextConfig {
	toggleBlurState: () => void;
}

const initialState = {
	toggleBlurState: () => {}
};
const blurContext = createContext<IBlurContextConfig>(initialState);

export const BlurContext = ({ children }: { children: ReactNode }) => {
	const { isOn, on } = useToggle();

	return (
		<blurContext.Provider value={{ toggleBlurState: on }}>
			<div className={`${isOn ? "blur-xl" : "blur-none"}`}>
				{children}
			</div>
		</blurContext.Provider>
	);
};

export const useBlurContext = () => {
	return useContext(blurContext);
};
