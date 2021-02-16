
import { profileAPI } from "./api/api";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	postsData: [
		{ id: '1', count: '5', name: 'Artur', value: 'hi' },
		{ id: '1', count: '1', name: 'Mukolai', value: 'hi' },
		{ id: '1', count: '2', name: 'Sanya', value: 'hi' }
	],
	profile: null,
	status: '',

};

const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newP = { id: 21, count: '0', name: 'artur', value: action.newPostTt };
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

		default:
			return state;
	}
}

export const addCreactorPost = (newPostTt) => ({ type: ADD_POST, newPostTt });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });


export const getProfileTh = (userId) => {
	return (dispatch) => {
		profileAPI.getProfile(userId)
			.then(data => dispatch(setProfile(data)));
	}
}

export const getStatusTh = (userId) => {  //для кого полуить статус
	return (dispatch) => {
		profileAPI.getStatus(userId)
			.then(response => dispatch(setStatus(response.data))); //для сетСтатус
	}
}

export const updateStatusTh = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status)
			.then(response => {
				if (response.data.resultCode === 0) {
					dispatch(setStatus(status));
				}
			});
	}
}


export default profileReduser;