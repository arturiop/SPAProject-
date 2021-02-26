import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/usersApi";
import { UserDataType } from "../commonType/commonType";
import { ActionsTypes, AppStateType, CommonThunkActionType } from "./reduxStore";


type ActionType = ActionsTypes<typeof action>
export type InitializStateType = typeof initializState;

let initializState = {
	userData: [] as Array<UserDataType>,
	pageTotal: 20,
	pageCount: 3,
	currentPage: 1,
	isFetching: false,
	toggleFetching: [] as Array<number>,
};

const userReducer = (state = initializState, action: ActionType): InitializStateType => {
	switch (action.type) {
		case 'FOLLOW':
			return {
				...state,
				userData: [...state.userData].map(item => {
					if (item.id === action.userId) {
						return { ...item, followed: true }
					}
					return item;
				})
			}

		case 'UNFOLLOW': {
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

		case 'SET_USERS':
			return { ...state, userData: [...action.users] }

		case 'CURRENT':
			return { ...state, currentPage: action.p }

		case 'TOTAL_COUNT':
			return { ...state, pageTotal: action.count }

		case 'SWITCH_FETCH':
			return { ...state, isFetching: action.fetching }

		case 'TOGGLE_FETCHING':
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

const action = {
	follow: (userId: number) => ({ type: 'FOLLOW', userId } as const),
	unFollow: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
	setUsers: (users: Array<UserDataType>) => ({ type: 'SET_USERS', users } as const),
	setCurrent: (p: number) => ({ type: 'CURRENT', p } as const),
	setTotalUsers: (count: number) => ({ type: 'TOTAL_COUNT', count } as const),
	switchFetch: (fetching: boolean) => ({ type: 'SWITCH_FETCH', fetching } as const),
	toggleFetchingInProgres: (fetching: boolean, userId: number) => ({ type: 'TOGGLE_FETCHING', fetching, userId } as const),
}

type DispatchType = Dispatch<ActionType> // use in dispatch
type StateType = () => AppStateType // use in props for state
type ThunkType = CommonThunkActionType<ActionType> // use after props thunk

export const getUsers = (currentPage: number, pageCount: number): ThunkType =>
	async (dispatch) => {
		dispatch(action.switchFetch(true));
		let data = await usersAPI.getUsers(currentPage, pageCount)
		dispatch(action.switchFetch(false));
		dispatch(action.setUsers(data.items));
		dispatch(action.setTotalUsers(data.totalCount));
	}
//  getState: () => AppStateType
export const changePage = (numb: number, pageCount: number): ThunkType =>
	async (dispatch) => {
		dispatch(action.setCurrent(numb));
		dispatch(action.switchFetch(true));
		let data = await usersAPI.getUsers(numb, pageCount)
		dispatch(action.switchFetch(false));
		dispatch(action.setUsers(data.items));
	}

export const unFollowTh = (userId: number) => async (dispatch: DispatchType) => {
	dispatch(action.toggleFetchingInProgres(true, userId));
	let data = await usersAPI.unfollow(userId)
	if (data.resultCode === 0) dispatch(action.unFollow(userId));
	dispatch(action.toggleFetchingInProgres(false, userId));
}

export const followTh = (userId: number) => async (dispatch: DispatchType) => {
	dispatch(action.toggleFetchingInProgres(true, userId));
	let data = await usersAPI.follow(userId)
	if (data.resultCode === 0) dispatch(action.follow(userId));
	dispatch(action.toggleFetchingInProgres(false, userId));
}

export default userReducer;