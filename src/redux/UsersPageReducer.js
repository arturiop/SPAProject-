
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLOW";
const SET_USERS = "SET_USERS";
const CURRENT = "CURRENT";
const TOTAL_COUNT = "TOTAL_COUNT";
const SWITCH_FETCH = "SWITCH_FETCH";

let initializState = {
	userData: [],
	pageTotal: 20,
	pageCount: 3,
	currentPage: 1,
	isFetching: false

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


export default userReducer;