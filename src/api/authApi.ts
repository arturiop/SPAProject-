import { LogeinType } from "../component/login/Login";
import { instance, APIResponseType, ResultCodeCaptchEnum, ResultCodeEnum } from "./api";

type LoginAPIType = { userId: number }


type AuthType = {
	data: {
		id: number
		login: string
		email: string
	}
	fieldsErrors: Array<string>
	messages: Array<string>
	resultCode: number
}
export const authAPI = {
	login(data: LogeinType) {
		return (
			instance.post<APIResponseType<LoginAPIType, ResultCodeEnum | ResultCodeCaptchEnum>>('auth/login',
				{ email: data.login, password: data.password, captcha: data.captcha })
				.then(response => response.data)
		);
	},

	logout() {
		return (
			instance.delete('auth/login').then(response => response.data)
		);
	},



	autoraithe() {
		return (
			instance.get<AuthType>(`auth/me`, {
				withCredentials: true
			}).then(response => response.data)
		);
	}

}