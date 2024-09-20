import 'server-only'

import { SignJWT, jwtVerify } from 'jose'
import { SessionPayLoad } from './sessions'

const secretKey = process.env.JWT_SECRET_KEY
const encodedKey = new TextEncoder().encode(secretKey)


export const encrypt = (payload: SessionPayLoad) => {
    return new SignJWT({ payload })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}




export const decrypt = async (session: string | undefined = '') => {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload
    } catch (error) {
        console.log('Failed to verify session')
    }
}