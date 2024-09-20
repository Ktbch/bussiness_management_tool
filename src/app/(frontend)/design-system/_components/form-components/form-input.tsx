import InputAndLabel from "./inputandLabel";
import { InputTypeConfig, InputTypes } from "./types";

interface IProps extends InputTypeConfig {
	type: InputTypes;
}

const FormInput = ({ ...formProps }: IProps) => {
	const { className, labelName, placeholder, type, state } = formProps;
	return (
		<InputAndLabel
			className={className}
			labelName={labelName}
			placeholder={placeholder}
			type={type}
			state={state}
		/>
	);
};

export default FormInput;
