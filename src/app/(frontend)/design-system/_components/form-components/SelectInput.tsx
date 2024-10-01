import { SelectInputAndLabel } from "./select-input";
import { InputTypeConfig } from "./types";

export const FormSelect = ({ ...formProps }: InputTypeConfig) => {
	const { className, labelName, placeholder, type, state, options } = formProps;
	return (
		<SelectInputAndLabel
			className={className}
			labelName={labelName}
			placeholder={placeholder}
			type={type}
			state={state}
			options={options}
		/>
	);
};
