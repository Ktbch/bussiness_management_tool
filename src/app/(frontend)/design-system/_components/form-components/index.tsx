"use client";

import React from "react";
import RenderFormInput from "./render-form-input";
import {  FormState, IFieldConfig } from "./types";
import { SubmitButton } from "@/app/(frontend)/components/button/submit-button";

interface IProps {
	actionFn: (payload: FormData) => void;
	fields?: IFieldConfig[];
	className: string;
	state: FormState;
	options?: string[]
	crudStyles?:string
}

const FormSchema = ({ ...formProps }: IProps) => {
	const { actionFn, className, fields, state, options,crudStyles } = formProps;

	// const { setToastProperties } = useToast()
	
	

	return (

		<form action={actionFn} className="relative bg-white">
			<div className={crudStyles}>
				{fields &&
					fields.map((field, index) =>
						<RenderFormInput
							key={index}
							className={className}
							labelName={field.name}
							placeholder={field.placeholder}
							type={field.type}
							state={state}
							options={options}
						/>
					)}
				
				{state?.message?.errMessage  && (	
					<p className="absolute top-[60%]  text-sm font-bold mb-5 bg-red-400 p-2">{state.message.errMessage}</p>
				)}
			</div>
			<SubmitButton
				pendingtext="submiting..."
				buttonName="submit"
				className="mt-5 bg-primaryColor rounded-lg text-neturalColor
				 hover:bg-secondaryColor transition-all duration-100 ease-in-out"
				/>
		</form>
	);
};

export default FormSchema;
