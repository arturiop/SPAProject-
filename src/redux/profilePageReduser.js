
import { profileAPI } from "./api/api";

const ADD_POST = 'ADD_POST';
const ADD_T = 'ADD_T';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETED_POST = 'DELETED_POST';

let initialState = {
	postsData: [
		{ id: '1', count: '5', name: 'Artur', value: 'hi' },
		{ id: '2', count: '1', name: 'Mukolai', value: 'hi' },
		{ id: '3', count: '2', name: 'Sanya', value: 'hi' }
	],
	post: '',
	profile: null,
	status: '',
};

const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newP = { id: state.postsData.length + 1, count: '0', name: 'artur', value: action.newPostTt };
			return {
				...state,
				postsData: [...state.postsData, newP],
			};
		}
		case SET_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}

		case SET_STATUS: {
			return {
				...state, status: action.status
			}
		}
		case DELETED_POST: {
			return {
				...state, postsData: state.postsData.filter(item => item.id !== action.id)
			}
		}
		case ADD_T: {
			return {
				...state, post: action.newPostTt
			}
		}
		default:
			return state;
	}
}

export const addT = (newPostTt) => ({ type: ADD_T, newPostTt }); //for test
export const addCreactorPost = (newPostTt) => ({ type: ADD_POST, newPostTt });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletedPost = (id) => ({ type: DELETED_POST, id }); //for test


export const getProfileTh = (userId) => async (dispatch) => {
	let data = await profileAPI.getProfile(userId)
	dispatch(setProfile(data));
}


export const getStatusTh = (userId) => async dispatch => {    //для кого полуить стату
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data)); //для сетСтатус
}


export const updateStatusTh = (status) => async dispatch => {
	let response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}

export default profileReduser;