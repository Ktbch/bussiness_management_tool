"use client";

import FormInput from "./form-input";
import { FormSelect } from "./SelectInput";
import TextArea from "./text-area";
import { InputTypeConfig } from "./types";

const RenderFormInput = ({ ...formProps }: InputTypeConfig) => {
	const { type } = formProps;

	switch (type) {
		case "text":
		case "email":
		case "password":
		case "number":
		case "checkbox":
			return <FormInput {...formProps} />;
		case "textArea":
			return <TextArea {...formProps} />;
		case "select":
			return <FormSelect {...formProps} />;
	}
};

export default RenderFormInput;
