import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { UserDataType } from "../commonType/commonType";
import { usersAPI } from "./api/api";
import { AppStateType } from "./reduxStore";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLOW";
const SET_USERS = "SET_USERS";
const CURRENT = "CURRENT";
const TOTAL_COUNT = "TOTAL_COUNT";
const SWITCH_FETCH = "SWITCH_FETCH";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";



let initializState = {
	userData: [] as Array<UserDataType>,
	pageTotal: 20,
	pageCount: 3,
	currentPage: 1,
	isFetching: false,
	toggleFetching: [] as Array<number>,
};
export type InitializStateType = typeof initializState;

const userReducer = (state = initializState, action: ActionType): InitializStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				userData: [...state.userData].map(item => {
					if (item.id === action.userId) {
						return { ...item, followed: true }
					}
					return item;
				})
			}

		case UNFOLLOW: {
			return {
				...state,
				userData: [...state.userData].map(item => {
					if (item.id === action.userId) {
						return { ...item, followed: false }
					}
					return item;
				})
			}
		}

		case SET_USERS:
			return { ...state, userData: [...action.users] }

		case CURRENT:
			return { ...state, currentPage: action.p }

		case TOTAL_COUNT:
			return { ...state, pageTotal: action.count }

		case SWITCH_FETCH:
			return { ...state, isFetching: action.fetching }

		case TOGGLE_FETCHING:
			return {
				...state,
				toggleFetching: action.fetching
					? [...state.toggleFetching, action.userId]
					: state.toggleFetching.filter(id => id !== action.userId)
			}

		default:
			return state;
	}
}
type ActionType = Follow | UnFollow | SetUsersType | SetCurrentType |
	SetTotalUsersType | SetSwitchFetchType | ToggleFetchingInProgresType;
type Follow = { type: typeof FOLLOW, userId: number }
export const follow = (userId: number): Follow => ({ type: FOLLOW, userId });
type UnFollow = { type: typeof UNFOLLOW, userId: number }
export const unFollow = (userId: number): UnFollow => ({ type: UNFOLLOW, userId });
type SetUsersType = { type: typeof SET_USERS, users: Array<UserDataType> }
export const setUsers = (users: Array<UserDataType>): SetUsersType => ({ type: SET_USERS, users })
type SetCurrentType = { type: typeof CURRENT, p: number }
export const setCurrent = (p: number): SetCurrentType => ({ type: CURRENT, p });
type SetTotalUsersType = { type: typeof TOTAL_COUNT, count: number }
export const setTotalUsers = (count: number): SetTotalUsersType => ({ type: TOTAL_COUNT, count });
type SetSwitchFetchType = { type: typeof SWITCH_FETCH, fetching: boolean }
export const switchFetch = (fetching: boolean): SetSwitchFetchType => ({ type: SWITCH_FETCH, fetching });
type ToggleFetchingInProgresType = { type: typeof TOGGLE_FETCHING, fetching: boolean, userId: number }
export const toggleFetchingInProgres = (fetching: boolean, userId: number): ToggleFetchingInProgresType => (
	{ type: TOGGLE_FETCHING, fetching, userId });

type DispatchType = Dispatch<ActionType> // use in dispatch
type StateType = () => AppStateType // use in props for state
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType> // use after props thunk

export const getUsers = (currentPage: number, pageCount: number): ThunkType =>
	async (dispatch) => {
		dispatch(switchFetch(true));
		let data = await usersAPI.getUsers(currentPage, pageCount)
		dispatch(switchFetch(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsers(data.totalCount));
	}
//  getState: () => AppStateType
export const changePage = (numb: number, pageCount: number): ThunkType =>
	async (dispatch) => {
		dispatch(setCurrent(numb));
		dispatch(switchFetch(true));
		let data = await usersAPI.getUsers(numb, pageCount)
		dispatch(switchFetch(false));
		dispatch(setUsers(data.items));
	}

export const unFollowTh = (userId: number) => async (dispatch: DispatchType) => {
	dispatch(toggleFetchingInProgres(true, userId));
	let data = await usersAPI.unfollow(userId)
	if (data.resultCode === 0) dispatch(unFollow(userId));
	dispatch(toggleFetchingInProgres(false, userId));
}

export const followTh = (userId: number) => async (dispatch: DispatchType) => {
	dispatch(toggleFetchingInProgres(true, userId));
	let data = await usersAPI.follow(userId)
	if (data.resultCode === 0) dispatch(follow(userId));
	dispatch(toggleFetchingInProgres(false, userId));
}

export default userReducer;