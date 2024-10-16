import { createContext, ReactNode, useContext } from "react";
import { useToggle } from "../../hooks/state/useToggle";

interface IModalContext {
	on: () => void;
	off: () => void;
	isOn: boolean;
	set: (value: boolean) => void;
}

const initailState: IModalContext = {
	on() {},
	off() {},
	isOn: false,
	set() {}
};
const modalActionContext = createContext(initailState);

export const ModalActionContextProvider = ({
	children
}: {
	children: ReactNode;
}) => {
	const { isOn, off, on, set } = useToggle();

	const value = { isOn, off, on, set };
	return (
		<modalActionContext.Provider value={value}>
			{children}
		</modalActionContext.Provider>
	);
};

export const useModalActionContext = () => {
	return useContext(modalActionContext);
};
