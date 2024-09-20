"use client";

import React from "react";
import FormSchema from ".";
import productAction from "@/app/_backend/actions/product.action";
import { useFormState, useFormStatus } from "react-dom";
import { Product } from "@/app/_backend/database/schema/types";
import { fieldNames, IFieldConfig } from "./types";
import { object } from "zod";
import { useToast } from "@/app/(frontend)/context/toast/toast.context";
import RenderFormInput from "./render-form-input";

interface IProps {
	data: fieldNames[];
}

export default function Tableform({ data }: IProps) {
	const [state, action] = useFormState(productAction, undefined);
	const { setToastProperties } = useToast();
	const handleSubmit = (formData: FormData) => {
		const result = action(formData);
	};
	return (
		<form
			className="w-full absolute -top-8"
			action={(formData: FormData) => {
				handleSubmit(formData);
			}}>
			<tbody className="text-xs text-gray-700 uppercase relative">
				<tr>
					{Object.values(data).map((data, index) =>
						<td className="border text-center lg:px-5 py-2" scope="row">
							<RenderFormInput
								className=""
								labelName={data}
								placeholder={data}
								state={state}
								type="tableFormInput"
								key={index}
							/>
						</td>
					)}
					<td scope="row" className="border text-center lg:px-5 py-2">
						<button className="bg-blue-500 w-full">Save</button>
					</td>
				</tr>
			</tbody>
		</form>
	);
}
