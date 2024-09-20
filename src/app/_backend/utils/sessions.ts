import 'server-only'
import { cookies } from 'next/headers'
import { decrypt, encrypt } from './jwt'

export interface SessionPayLoad {
    userId: string
    expiresAt: Date
}

export const createSession = async (userId: string) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ userId, expiresAt })
    cookies().set('sessionToken', session, {
        expires: expiresAt,
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/'
    })
}

export const getSessions = async () => {
    const userDetails: { name: string, value: string } | undefined = cookies().get('sessionToken')
    const details = await decrypt(userDetails?.value)
    return details
}

export const deleteSessions = () => {
    return cookies().delete('sessionToken')
}
