'use client'

import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { useToastContext } from "../context/toast/toast.context";
import { FormState } from "../design-system/_components/form-components/types";
import { useEffect } from "react";
import { manageState } from "../utils/manage-state-utils";
import {  IProductActions } from "@/app/_backend/actions/product.action";


// this is a design

export type MutateFunc = (state: FormState, formData:IProductActions) => Promise<FormState>;
type Off = ()=>void

export const useMutation = (mutateFunc: MutateFunc, off?:Off) => {
	const [state, action] = useFormState(mutateFunc, undefined);
	const { refresh } = useRouter();
	const toast = useToastContext();

    const handleMutation = (formData: IProductActions) => action(formData);
    
    useEffect(() => {
		const { checkSuccessOfAction, restoreActionState } = manageState(state)
		
		console.log(checkSuccessOfAction)
		
		if (checkSuccessOfAction()) {
			off && off()
			refresh()
			toast?.toast(checkSuccessOfAction()!)
		}
		return () => { (restoreActionState(), toast?.removeToast(5000)  ) }	
    }, [handleMutation])
    
    return { handleMutation, state }
};
