import axios from "axios";
import { string } from "yup/lib/locale";
import { PhotosType, ProfileType, UserDataType } from "../../commonType/commonType";
import { LogeinType } from "../../component/login/Login";
import { InitialVFormik } from "../../component/Profile/ProfileInfo/ContactProfileFrorm";

export enum ResultCodeEnum {
	Succses = 0,
	Error = 1
}
export enum ResultCodeCaptchEnum {
	Captcha = 10
}
const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "1f1850ac-6994-4f00-8632-17c6cdab6dee"
	}
});
type CaptchaType = {
	url: string
}
export const securityAPI = {

	getCaptcha() {
		return instance.get<CaptchaType>('security/get-captcha-url')
	}
}

type GetUsersType = {
	error: null | string
	items: Array<UserDataType>
	totalCount: number
}
type FollowingType = {
	data: {}
	fieldsErrors: Array<string>
	messages: Array<string>
	resultCode: number
}
export const usersAPI = {
	getUsers(currnt = 1, pgCount = 10) {
		return (
			instance.get<GetUsersType>(`users?page=${currnt}&count=${pgCount}`)
				.then(response => response.data)
		);
	},
	unfollow(id: number) {
		return (
			instance.delete<FollowingType>(`follow/${id}`)
				.then(response => response.data)

		);
	},
	follow(id: number) {
		return (
			instance.post<FollowingType>(`follow/${id}`).then(response => response.data)
		);
	}
}
type LoginAPIType = {
	data?: { userId: number }
	fieldsErrors: Array<string>
	messages: Array<string>
	resultCode: number
}

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
			instance.post<LoginAPIType>('auth/login',
				{ email: data.login, password: data.password, captcha: data.captcha })
				.then(response => response.data)
		);
	},

	logout() {
		return (
			instance.delete<LoginAPIType>('auth/login'
			)
				.then(response => response.data)
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
type ResponseType = {
	data: {}
	fieldsErrors: Array<string>
	messages: Array<string>
	resultCode: number
}
type SendPhotoType = {
	data: { photos: PhotosType }
	fieldsErrors: Array<string>
	messages: Array<string>
	resultCode: number
}
export const profileAPI = {
	getProfile(id: number | null) {
		return (
			instance.get<ProfileType>(`profile/${id}`)
				.then(response => response.data)
		);
	},

	getStatus(userId: number) {
		return (
			instance.get<string>(`profile/status/${userId}`)
		)
	},

	updateStatus(status: string) {
		return (
			instance.put<ResponseType>(`profile/status/`, { status: status })
				.then(response => response.data)
		)
	},

	sendPhoto(photoFile: any) {
		const formData = new FormData();
		formData.append("image", photoFile)
		return (
			instance.put<SendPhotoType>('profile/photo/', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}).then(response => response.data)
		)
	},

	editProfile(obj: InitialVFormik) {
		return (
			instance.put<ResponseType>('profile/', obj)
		).then(response => response.data)
	}

}




