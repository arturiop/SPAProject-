import { commonAPI } from "./api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLOW";
const SET_USERS = "SET_USERS";
const CURRENT = "CURRENT";
const TOTAL_COUNT = "TOTAL_COUNT";
const SWITCH_FETCH = "SWITCH_FETCH";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";


let initializState = {
	userData: [],
	pageTotal: 20,
	pageCount: 3,
	currentPage: 1,
	isFetching: false,
	toggleFetching: [],

};

const userReducer = (state = initializState, action) => {
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
					: state.toggleFetching.filter(id => id != action.userId)
			}

		default:
			return state;
	}

}



export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrent = (p) => ({ type: CURRENT, p });
export const setTotalUsers = (count) => ({ type: TOTAL_COUNT, count });
export const switchFetch = (fetching) => ({ type: SWITCH_FETCH, fetching });
export const toggleFetchingInProgres = (fetching, userId) => ({ type: TOGGLE_FETCHING, fetching, userId });


export const getUsers = (currentPage, pageCount) => {
	return (dispatch) => {
		dispatch(switchFetch(true));
		commonAPI.getUsers(currentPage, pageCount)
			.then(data => {
				dispatch(switchFetch(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsers(data.totalCount));
			})
	}
}

export const changePage = (numb, pageCount) => {
	return (dispatch) => {
		dispatch(setCurrent(numb));
		dispatch(switchFetch(true));
		commonAPI.getUsers(numb, pageCount)
			.then(data => {
				dispatch(switchFetch(false));
				dispatch(setUsers(data.items));
			})
	}
}


export const unFollowTh = (userId) => {
	return (dispatch) => {
		dispatch(toggleFetchingInProgres(true, userId));
		commonAPI.unfollow(userId)
			.then(data => {
				if (data.resultCode == 0) {
					dispatch(unFollow(userId));
				}
				dispatch(toggleFetchingInProgres(false, userId));
			})
	}
}
export const followTh = (userId) => {
	return (dispatch) => {
		dispatch(toggleFetchingInProgres(true, userId));
		commonAPI.follow(userId)
			.then(data => {
				if (data.resultCode == 0) {
					dispatch(follow(userId));
				}
				dispatch(toggleFetchingInProgres(false, userId));
			});
	}
}






export default userReducer;