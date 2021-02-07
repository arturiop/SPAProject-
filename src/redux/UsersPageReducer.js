
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLOW";
const SETUSERS = "SETUSERS";

let initializState = {
	userData: []

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
		case SETUSERS:
			return { ...state, userData: [...state.userData, ...action.users] }

		default:
			return state;
	}

}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SETUSERS, users })

export default UserReducer;