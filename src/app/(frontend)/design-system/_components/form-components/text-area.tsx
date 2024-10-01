import TextAreaAndLabel from "./TextArea";
import { InputTypeConfig, InputTypes } from "./types";

interface IProps extends InputTypeConfig {
	type: InputTypes;
}

const TextArea = ({ ...formProps }: IProps) => {
	const { className, labelName, placeholder, type, state } = formProps;
	return (
		<TextAreaAndLabel
			className={className}
			labelName={labelName}
			placeholder={placeholder}
			type={type}
			state={state}
		/>
	);
};

export default TextArea;
