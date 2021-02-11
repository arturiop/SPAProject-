const SET_LOGIN_ID_EMAIL = "SET_LOGIN_ID_EMAIL";


let initialState = {
	userId: null,
	email: null,
	login: null,
	isFatching: false,
	isAuth: false
};

const authReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGIN_ID_EMAIL: {
			return {
				...state,
				...action.data, //затрет все емейл логин и айди на новые
				isAuth: true
			}
		}
		default:
			return state;
	}

}

export const setUserData = (userId, email, login) => ({
	type: SET_LOGIN_ID_EMAIL,
	data: { userId, email, login }
});

export default authReduser;