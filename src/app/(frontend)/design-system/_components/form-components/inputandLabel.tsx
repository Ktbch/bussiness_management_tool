'use client'
import { InputTypeConfig } from "./types";


const InputAndLabel = ({ type, placeholder, className, labelName, state }: InputTypeConfig) => {
	return (
		<div className="flex flex-col items-start gap-2 mb-5">
			{labelName && (<label htmlFor={labelName} className="text-netualColor2">{labelName}</label>)}
			<div className="relative">
				<input type={type} placeholder={placeholder} className={`outline-none w-64 h-10 border  
					focus:border-secondaryColor p-3 rounded-sm \
					${labelName === 'id' ? 'hidden' : 'block'
					} ${className}`}  name={labelName} />
				{state?.errors &&
				     <div className="bg-neturalColor mt-2 p-2">
					{state.errors[labelName] ? state.errors[labelName].map((error, index) => (
						<div key={index} className="text-xs text-errorColor">
							{error} 
						</div>
				)) :''}
			        </div> }
			</div>
		</div>
	);
};


export default InputAndLabel;
