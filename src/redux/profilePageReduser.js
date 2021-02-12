import { connect } from "react-redux";
import { commonAPI } from "./api/api";

const ADD_POST = 'ADD-POST';
const NEW_TEXT_POST = 'NEW-TEXT-POST';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
	postsData: [
		{ id: '1', count: '5', name: 'Artur', value: 'hi' },
		{ id: '1', count: '1', name: 'Mukolai', value: 'hi' },
		{ id: '1', count: '2', name: 'Sanya', value: 'hi' }
	],
	newPostT: '',
	profile: null,
};

const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newP = { id: 21, count: '0', name: 'artur', value: state.newPostT };
			return {
				...state,
				postsData: [...state.postsData, newP],
				newPostT: ''
			};

		}
		case NEW_TEXT_POST: {
			return {
				...state,
				newPostT: action.str
			};
		}
		case SET_PROFILE: {
			return {
				...state, profile: action.profile
			}
		}
		default:
			return state;
	}
}

export const addCreactorPost = () => ({ type: ADD_POST });
export const addCreactorTextPost = (t) => ({ type: NEW_TEXT_POST, str: t });
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });


export const getUserTh = (userId) => {
	return (dispatch) => {
		commonAPI.getUser(userId)
			.then(data => dispatch(setProfile(data)));
	}
}


export default profileReduser;