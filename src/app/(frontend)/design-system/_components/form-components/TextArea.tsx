'use client'
import { InputTypeConfig } from "./types";


const TextAreaAndLabel = ({ type, placeholder, className, labelName, state }: InputTypeConfig) => {
	return (
		<div className="flex flex-col items-start gap-2 mb-5">
			{labelName && (<label htmlFor={labelName} className={`${state?.errors ? 'text-red-300' : ''}`}>{labelName}</label>)}
			<div className="relative">
				{/* <textarea  placeholder={placeholder} className={`outline-none w-64 h-10 border rounded-lg  ${className}`} name={labelName} ></textarea> */}
				<textarea></textarea>
				{state?.errors && state.errors[labelName] ? state.errors[labelName].map((error, index) => (
					<div key={index} className="text-xs text-red-500">
						{error}
					</div>
			)) :''}
			</div>
		</div>
	);
};

export default TextAreaAndLabel
