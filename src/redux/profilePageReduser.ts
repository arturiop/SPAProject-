
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { PhotosType, PostDataType, ProfileType } from "../commonType/commonType";
import { InitialVFormik } from "../component/Profile/ProfileInfo/ContactProfileFrorm";
import { ResultCodeEnum } from "../api/api";
import { ActionsTypes, AppStateType, CommonThunkActionType } from "./reduxStore";
import { profileAPI } from "../api/profileApi";

// const CHANGE_PROFILE = 'CHANGE_PROFILE';

let initialState = {
	postsData: [
		{ id: 1, count: '5', name: 'Artur', value: 'hi' },
		{ id: 2, count: '1', name: 'Mukolai', value: 'hi' },
		{ id: 3, count: '2', name: 'Sanya', value: 'hi' }
	] as Array<PostDataType>,
	post: '',
	profile: null as ProfileType | null,
	status: '',
};
export type InitializStateType = typeof initialState;
type ActionType = ActionsTypes<typeof action>

const profileReduser = (state = initialState, action: ActionType): InitializStateType => {
	switch (action.type) {
		case 'ADD_POST': {
			let newP = { id: state.postsData.length + 1, count: '0', name: 'artur', value: action.newPostTt };
			return {
				...state,
				postsData: [...state.postsData, newP],
			};
		}
		case 'SET_PROFILE': {
			return {
				...state, profile: action.profile
			}
		}

		case 'SET_STATUS': {
			return {
				...state, status: action.status
			}
		}
		case 'DELETED_POST': {
			return {
				...state, postsData: state.postsData.filter(item => item.id !== action.id)
			}
		}
		case 'ADD_T': {
			return {
				...state, post: action.newPostTt
			}
		}
		case 'PHOTO': {
			return {
				...state, profile: { ...state.profile, photos: action.photos } as ProfileType
			}
		}
		// case CHANGE_PROFILE: {
		// 	debugger
		// 	return {
		// 		...state, profile: {
		// 			...state.profile,
		// 			aboutMe: action.objProperti.aboutMe,
		// 			lookingForAJobDescription: action.objProperti.lookingForAJobDescription,
		// 			fullName: action.objProperti.fullName,
		// 		}
		// 	}
		// }

		default:
			return state;
	}
}

export const action = {
	changePhoto: (photos: PhotosType) => ({ type: 'PHOTO', photos } as const),
	addT: (newPostTt: string) => ({ type: 'ADD_T', newPostTt } as const),
	addCreactorPost: (newPostTt: string) => ({ type: 'ADD_POST', newPostTt } as const), //for test
	setProfile: (profile: ProfileType) => ({ type: 'SET_PROFILE', profile } as const),
	setStatus: (status: string) => ({ type: 'SET_STATUS', status } as const),
	deletedPost: (id: number) => ({ type: 'DELETED_POST', id } as const), //for test
	// export const changeProfile = (objProperti) => ({ type: CHANGE_PROFILE, objProperti }); // if want use so!
}



type DispatchType = Dispatch<ActionType>
type StateType = () => AppStateType
type ThunkType = CommonThunkActionType<ActionType>

export const getProfileTh = (userId: number | null) => async (dispatch: DispatchType) => {
	let data = await profileAPI.getProfile(userId)
	dispatch(action.setProfile(data));
}
export const getStatusTh = (userId: number) => async (dispatch: DispatchType) => {    //для кого полуить стату
	let response = await profileAPI.getStatus(userId)
	dispatch(action.setStatus(response.data)); //для сетСтатус
}
export const updateStatusTh = (status: string) => async (dispatch: DispatchType) => {
	let response = await profileAPI.updateStatus(status)
	if (response.resultCode === ResultCodeEnum.Succses) {
		dispatch(action.setStatus(status));
	}
}

export const sendPhoto = (photo: File): ThunkType => async (dispatch) => {
	let data = await profileAPI.sendPhoto(photo)
	if (data.resultCode === ResultCodeEnum.Succses) {
		dispatch(action.changePhoto(data.data.photos));
	}
}

export const editProfile = (objProperti: InitialVFormik): ThunkType => async (dispatch, getState) => { // refresh profile data and do request new user profile
	let userId = getState().auth.userId;
	let response = await profileAPI.editProfile(objProperti)
	if (response.resultCode === ResultCodeEnum.Succses) {
		if (userId !== null) {
			dispatch(getProfileTh(userId))
		}
		else {
			throw new Error("User id can`t be null")
		}

		// dispatch(changeProfile(objProperti));
	}
}

export default profileReduser;