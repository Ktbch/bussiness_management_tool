export const responseMessageTool = (message: string, type: 'error' | 'sucess') => {
    switch (type) {
        case 'error':
            return { message: { errMessage: message } }
        case 'sucess':
            return { message: { successMessage: message } }
        default:
            break
    }
}

