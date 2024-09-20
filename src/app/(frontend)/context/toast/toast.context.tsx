"use client";

import {
	createContext,
	ReactNode,
	SetStateAction,
	useContext,
	useState
} from "react";
import { ToasContextValue, ToastConfig } from "./types";
import { ToastCmp } from "../../components/toasts";

const initalState: ToasContextValue = {
	setToastProperties: (value: SetStateAction<ToastConfig>) => {}
};

const toastPropertiesInitailValue: ToastConfig = {
	visible: false,
	type: null,
	toastMessage: ""
};

const toastContext = createContext<ToasContextValue>(initalState);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
	//  TODO check possible refactoring for this code
	const [toastProperties, setToastProperties] = useState<ToastConfig>(
		toastPropertiesInitailValue
	);
	const value = {
		setToastProperties
	};
	return (
		<toastContext.Provider value={value}>
			{children}
			{toastProperties.visible &&
				<ToastCmp
					type={toastProperties.type}
					toastMessage={toastProperties.toastMessage}
				/>}
		</toastContext.Provider>
	);
};

export const useToast = () => {
	return useContext(toastContext);
};
