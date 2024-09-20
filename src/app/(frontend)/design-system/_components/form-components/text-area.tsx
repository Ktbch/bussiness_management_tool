import InputAndLabel from "./inputandLabel";
import TextAreaAndLabel from "./TextArea";
import { InputTypeConfig, Types } from "./types";

interface IProps extends InputTypeConfig {
	type: Types;
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
