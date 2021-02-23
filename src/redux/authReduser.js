import { authAPI, securityAPI } from "./api/api";

const SET_LOGIN_ID_EMAIL = "SET_LOGIN_ID_EMAIL";
const SET_CAPTCHA = "SET_CAPTCHA";

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captcha: null,
};

const authReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGIN_ID_EMAIL: {
			return {
				...state,
				...action.data, //затрет все емейл логин и айди на новые
			}
		}
		case SET_CAPTCHA: {
			return {
				...state, captcha: action.captcha
			}
		}
		default:
			return state;
	}

}

export const setUserData = (userId, email, login, isAuth) => ({
	type: SET_LOGIN_ID_EMAIL, data: { userId, email, login, isAuth }
});

export const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha });


export const loginTh = (data) => async (dispatch) => {

	let response = await authAPI.login(data)
	if (response.resultCode === 0) {
		dispatch(autoraithTh())
	} else {
		dispatch(getCaptchaURL())
	}


}

export const autoraithTh = () => async (dispatch) => {
	let data = await authAPI.autoraithe()
	if (data.resultCode === 0) {
		let { id, email, login } = data.data;
		dispatch(setUserData(id, email, login, true))
	};
}


export const singOutTh = () => async (dispatch) => {
	let data = await authAPI.logout()
	if (data.resultCode === 0) {
		dispatch(setUserData(null, null, null, false))
	};
}

export const getCaptchaURL = () => async (dispatch) => {
	let response = await securityAPI.getCaptcha()
	dispatch(setCaptcha(response.data.url));

}


export default authReduser;