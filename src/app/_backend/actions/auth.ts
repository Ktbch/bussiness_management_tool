'use server'


import { FormState } from "@/app/(frontend)/design-system/_components/form-components/types"
import { SignInFormSchema } from "@/app/lib/zod-schema"
import { redirect } from "next/navigation"
import { createSession, deleteSessions } from "../utils/sessions"
import userRepository from "../repository/user.repository"

// refactor this code


export async function signIn(state: FormState, formdata: FormData) {
    const { findOneUser } = await userRepository()
    try {
        const validateFields = SignInFormSchema.safeParse({
            username: formdata.get('username'),
            password: formdata.get('password')
        })
        if (!validateFields.success) {
            return {
                errors: validateFields.error.flatten().fieldErrors
            }
        }
        const userFound = await findOneUser(validateFields.data.username)
        console.log(userFound)
        if (userFound && (userFound.password === validateFields.data.password)) {
            createSession(JSON.stringify(userFound.id))
            redirect('/localhost:3000/dashboard')
        }
        return {
            message: 'invalid Details: Username or Password is Incorrect'
        }
    } catch (error) {
        return {
            messsage: error
        }
    }
}