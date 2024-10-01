"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { ToastCmp } from "../../components/toasts";

interface IToastConfig {
	toast: (message: string) => void;
	removeToast: (after: number) => NodeJS.Timeout;
}

const toastContext = createContext<IToastConfig | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
	const [message, setMessage] = useState("");

	const toast = useCallback((message: string) => setMessage(message), [
		message
	]);

	const removeToast = (after: number) =>
		setTimeout(() => setMessage(""), after);

	const value = {
		toast,
		removeToast
	};
	return (
		<toastContext.Provider value={value}>
			{children}
			<ToastCmp toastMessage={message} />
		</toastContext.Provider>
	);
};

export const useToastContext = () => {
	return useContext(toastContext);
};
