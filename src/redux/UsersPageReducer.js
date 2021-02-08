
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLOW";
const SET_USERS = "SET_USERS";
const CURRENT = "CURRENT";
const TOTAL_COUNT = "TOTAL_COUNT";

let initializState = {
	userData: [],
	pageTotal: 20,
	pageCount: 90,
	currentPage: 1

};

const UserReducer = (state = initializState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				userData: [...state.userData].map(item => {
					if (item.id === action.userId) {
						return { ...item, follow: true }
					}
					return item;
				})
			}

		case UNFOLLOW:
			return {
				...state,
				userData: [...state.userData].map(item => {
					if (item.id === action.userId) {
						return { ...item, follow: false }
					}
					return item;
				})
			}

		case SET_USERS:
			return { ...state, userData: [...action.users] }

		case CURRENT:
			return { ...state, currentPage: action.p }

		case TOTAL_COUNT:
			return { ...state, pageTotal: action.count }

		default:
			return state;
	}

}



export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrent = (p) => ({ type: CURRENT, p });
export const setTotalUsersAC = (count) => ({ type: TOTAL_COUNT, count });

export default UserReducer;