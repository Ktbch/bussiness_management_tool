import { InputTypeConfig } from "./types"

export const SelectInputAndLabel = ({  labelName, state,options }: InputTypeConfig) => {
    return (
        <div className="flex flex-col items-start gap-2 mb-2">
            {labelName && (<label htmlFor={labelName} className={`${state?.errors ? 'text-red-300' : ''}`}>{labelName}</label>)}
            <div className="relative">

                <select name={labelName} className=" border outline-none text-sm rounded-lg block w-full p-2.5"><option >Choose Status</option>{options?.map((option, index) => (<option value={option} key={index}>{option}</option>)) }</select>
                {state?.errors && state.errors[labelName] ? state.errors[labelName].map((error, index) => (
                    <div key={index} className="text-xs text-red-500">
                        {error}
                    </div>
                )) : ''}
            </div>
        </div>
    )
}