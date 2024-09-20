"use client";

import { useToast } from "@/app/(frontend)/context/toast/toast.context";
import { InputTypeConfig } from "./types";

export default function TableFormInput({type, state, className, labelName, placeholder}:InputTypeConfig) {
    //    refactor this
   
    return (

               <input
                    type='text'
                    placeholder={placeholder}
                    disabled={placeholder === 'id' && true}
                    className={` w-full outline-none text-center ${state?.errors && state.errors[labelName] ? 'border border-red-600' : ''}  
                    ${className}`} name={labelName}
                    />
    );
}

