"use client";

import React from "react";
import RenderFormInput from "./render-form-input";
import { fieldNames, FormState, IFieldConfig } from "./types";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "@/app/(frontend)/components/button/submit-button";
import { useToast } from "@/app/(frontend)/context/toast/toast.context";

interface IProps {
	actionFn: (payload: FormData) => void;
	fields?: IFieldConfig[];
	className: string;
	state: FormState;
}

const FormSchema = ({ ...formProps }: IProps) => {
	const { actionFn, className, fields, state } = formProps;
	const { pending } = useFormStatus();


	return (

		 <form action={actionFn} className="relative">
			{fields &&
				fields.map((field, index) =>
					<RenderFormInput
						key={index}
						className={className}
						labelName={field.name}
						placeholder={field.placeholder}
						type={field.type}
						state={state}
					/>
				)}
			{state?.message && (	
			<p className="absolute top-[60%]  text-sm font-bold mb-5 bg-red-400 p-2">{state.message.errMessage}</p>
			)}
			<SubmitButton
				pending={pending}
				pendingtext="submiting..."
				buttonName="submit"
				className="mt-20"
				/>
		</form>
	);
};

export default FormSchema;
