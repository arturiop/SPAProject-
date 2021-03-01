import axios from "axios";


export enum ResultCodeEnum {
	Succses = 0,
	Error = 1
}
export enum ResultCodeCaptchEnum {
	Captcha = 10
}
export const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "1f1850ac-6994-4f00-8632-17c6cdab6dee"
	}
});


export type APIResponseType<D = {}, RC = ResultCodeEnum> = {
	data: D
	fieldsErrors: Array<string>
	messages: Array<string>
	resultCode: 0
}







