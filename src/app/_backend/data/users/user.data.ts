import userRepository from "../../repository/user.repository";
import { getSessions } from "../../utils/sessions";



export default async function UserData() {
    const { getLoggedInUser } = await userRepository()
    try {
        const session = await getSessions()
        if (session) {
            const userData: { userId: string, expiresAt: string } = session.payload
            const loggedInUser = await getLoggedInUser(userData.userId)
            return loggedInUser
        }
        return
    } catch (error) {
        throw error
    }
}
