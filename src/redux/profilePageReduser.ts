
import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { PhotosType, PostDataType, ProfileType } from "../commonType/commonType";
import { InitialVFormik } from "../component/Profile/ProfileInfo/ContactProfileFrorm";
import { profileAPI, ResultCodeEnum } from "./api/api";
import { AppStateType } from "./reduxStore";

const ADD_POST = 'ADD_POST';
const ADD_T = 'ADD_T';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETED_POST = 'DELETED_POST';
const PHOTO = 'PHOTO';
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
const profileReduser = (state = initialState, action: ActionType): InitializStateType => {
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
		case PHOTO: {
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
type ActionType = ChangePhotoType | AddTType | AddCreactorPostType | SetProfileType |
	SetStatusType | DeletedPostType

type ChangePhotoType = { type: typeof PHOTO, photos: PhotosType }
export const changePhoto = (photos: PhotosType): ChangePhotoType => ({ type: PHOTO, photos })



type AddTType = { type: typeof ADD_T, newPostTt: string }
export const addT = (newPostTt: string): AddTType => ({ type: ADD_T, newPostTt }); //for test





type AddCreactorPostType = { type: typeof ADD_POST, newPostTt: string }
export const addCreactorPost = (newPostTt: string): AddCreactorPostType => ({ type: ADD_POST, newPostTt });
type SetProfileType = { type: typeof SET_PROFILE, profile: ProfileType }
export const setProfile = (profile: ProfileType): SetProfileType => ({ type: SET_PROFILE, profile });
type SetStatusType = { type: typeof SET_STATUS, status: string }
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status });
type DeletedPostType = { type: typeof DELETED_POST, id: number }
export const deletedPost = (id: number): DeletedPostType => ({ type: DELETED_POST, id }); //for test
// export const changeProfile = (objProperti) => ({ type: CHANGE_PROFILE, objProperti }); // if want use so!

type DispatchType = Dispatch<ActionType>
type StateType = () => AppStateType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const getProfileTh = (userId: number | null) => async (dispatch: DispatchType) => {
	let data = await profileAPI.getProfile(userId)
	dispatch(setProfile(data));
}
export const getStatusTh = (userId: number) => async (dispatch: DispatchType) => {    //для кого полуить стату
	let response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data)); //для сетСтатус
}
export const updateStatusTh = (status: string) => async (dispatch: DispatchType) => {
	let response = await profileAPI.updateStatus(status)
	if (response.resultCode === ResultCodeEnum.Succses) {
		dispatch(setStatus(status));
	}
}

export const sendPhoto = (photo: any): ThunkType => async (dispatch) => {
	let response = await profileAPI.sendPhoto(photo)
	if (response.resultCode === ResultCodeEnum.Succses) {
		dispatch(changePhoto(response.data.photos));
	}
}

export const editProfile = (objProperti: InitialVFormik): ThunkType => async (dispatch, getState) => { // refresh profile data and do request new user profile
	let userId = getState().auth.userId;
	let response = await profileAPI.editProfile(objProperti)
	if (response.resultCode === ResultCodeEnum.Succses) {
		dispatch(getProfileTh(userId))
		// dispatch(changeProfile(objProperti));
	}
}

export default profileReduser;