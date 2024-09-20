"use client";

import FormInput from "./form-input";
import TableFormInput from "./table-form-input";
import TextArea from "./text-area";
import { InputTypeConfig } from "./types";

const RenderFormInput = ({ ...formProps }: InputTypeConfig) => {
	const { type } = formProps;

	switch (type) {
		case "text":
		case "email":
		case "password":
		case "number":
			return <FormInput {...formProps} />;
		case "textArea":
			return <TextArea {...formProps} />;
		case "tableFormInput":
			return <TableFormInput {...formProps} />;
	}
};

export default RenderFormInput;
