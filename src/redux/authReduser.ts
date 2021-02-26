
import { ThunkAction } from "redux-thunk";
import { ResultCodeCaptchEnum, ResultCodeEnum } from "../api/api";
import { authAPI } from "../api/authApi";
import { securityAPI } from "../api/securityApi";
import { ActionsTypes, AppStateType, CommonThunkActionType, } from "./reduxStore";

let initialState = {
	userId: 1 as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false as boolean | null,
	captcha: null as string | null
};

export type InitialStateType = typeof initialState;

const authReduser = (state = initialState, action: ActionType): InitialStateType => {
	switch (action.type) {
		case "SET_LOGIN_ID_EMAIL": {
			return {
				...state,
				...action.data, //затрет все емейл логин и айди на новые
			}
		}
		case "SET_CAPTCHA": {
			return {
				...state,
				captcha: action.captcha,
			}
		}
		default:
			return state;
	}

}


type ActionType = ActionsTypes<typeof action>
const action = {
	setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null) =>
		({ type: "SET_LOGIN_ID_EMAIL", data: { userId, email, login, isAuth } } as const),
	setCaptcha: (captcha: string) => ({ type: "SET_CAPTCHA", captcha } as const),
}

type ThunkType = CommonThunkActionType<ActionType>

export const loginTh = (data: any): ThunkType => async (dispatch) => {

	let response = await authAPI.login(data)
	if (response.resultCode === ResultCodeEnum.Succses) {
		dispatch(autoraithTh())
	} else {
		if (response.resultCode === ResultCodeCaptchEnum.Captcha) {
			dispatch(getCaptchaURL())
		}
	}
}

export const autoraithTh = (): ThunkType => async (dispatch) => {
	let data = await authAPI.autoraithe()
	if (data.resultCode === ResultCodeEnum.Succses) {
		let { id, email, login } = data.data;
		dispatch(action.setUserData(id, email, login, true))
	};
}


export const singOutTh = (): ThunkType => async (dispatch) => {
	let data = await authAPI.logout()
	if (data.resultCode === ResultCodeEnum.Succses) {
		dispatch(action.setUserData(null, null, null, false))
	};
}

export const getCaptchaURL = (): ThunkType => async (dispatch) => {
	let data = await securityAPI.getCaptcha()
	dispatch(action.setCaptcha(data.url));
}


export default authReduser;