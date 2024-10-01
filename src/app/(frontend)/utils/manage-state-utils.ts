import { FormState } from "../design-system/_components/form-components/types"

export const manageState = (state: FormState) => {
    return {
        checkSuccessOfAction() {
            return state?.message?.successMessage
        },
        restoreActionState() {
            state?.message?.successMessage ? state.message.successMessage = '' : ''
        }
    }
}