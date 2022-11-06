import storageService from '../../service/storageService'
import API from '../../utils/api'
import { endpoints } from '../../utils/constants'
const authController = {
    doLogin: async (credential) => {
        try {
            const user = await API.post(endpoints.USER_LOGIN, credential)
            storageService.setUser({ token: user.data.token, user: user.data.user });
            Promise.resolve(user)
        } catch (error) {
            Promise.reject(error);
        }
    },
    doSignUp: async (newUser) => {
        try {
            const user = await API.post(endpoints.USER_SIGN_UP, newUser)
            storageService.setUser({ token: user.data.token, user: user.data.user });
            Promise.resolve(user)
        } catch (error) {
            Promise.reject(error);
        }
    }
}

export default authController;