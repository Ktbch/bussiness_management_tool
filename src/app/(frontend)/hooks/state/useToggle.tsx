import { useState } from "react";

export const useToggle = (defaultValue = false) => {
	const [isOn, setIsOn] = useState(defaultValue);
	const on = () => setIsOn(true);
	const off = () => setIsOn(false);
	const toggle = () => setIsOn(prevState => !prevState);
	const set = (value: boolean) => setIsOn(value);

	return { on, off, toggle, isOn, set };
};
