import { usersAPI } from "../api/usersApi";
import { UserDataType } from "../commonType/commonType";
import { ActionsTypes, CommonThunkActionType } from "./reduxStore";

// export type FriendsType = {
// 	id: string
// 	name: string
// 	lastName: string
// 	imagePath: string
// }

let initializState = {
	friendsData: [] as Array<UserDataType>,
	pageTotal: 20,
	pageCount: 3,
	currentPage: 1,
	isFetching: false,
	toggleFetching: [] as Array<number>,
};

export type InitializStateType = typeof initializState;
type ActionType = ActionsTypes<typeof actions>
type ThunkType = CommonThunkActionType<ActionType>
const friendsReduser = (state = initializState, action: ActionType): InitializStateType => {
	switch (action.type) {
		case 'GET_PIACE_FRIENDS': {
			return {
				...state, friendsData: [...action.friends]
			}
		}
		default:
			return state;
	}

}

const actions = {
	getFriends: (friends: Array<UserDataType>) => ({ type: 'GET_PIACE_FRIENDS', friends } as const)
}
export const getFriendsTh = (): ThunkType => async (dispatch) => {
	let data = await usersAPI.getUsersFriends()
	dispatch(actions.getFriends(data.items))
}

export default friendsReduser;