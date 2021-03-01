import { UserDataType } from "../commonType/commonType";
import { instance, APIResponseType } from "./api";

type GetUsersType = {
	error: null | string
	items: Array<UserDataType>
	totalCount: number
}

export const usersAPI = {
	getUsers(currnt = 1, pgCount = 3, term = '', friend: null | boolean = null) {
		return (
			instance.get<GetUsersType>(`users?page=${currnt}&count=${pgCount}&term=${term}`
				+ (friend === null ? '' : `&friend=${friend}`))
				.then(response => response.data)
		);
	},
	unfollow(id: number) {
		return (
			instance.delete<APIResponseType>(`follow/${id}`)
				.then(response => response.data)

		);
	},
	follow(id: number) {
		return (
			instance.post<APIResponseType>(`follow/${id}`)
				.then(response => response.data)
		);
	},
	searchUsersByName(userName: string) {
		return (
			instance.get<GetUsersType>(`users?term=${userName}`)
				.then(res => res.data)
		)
	},
	getUsersFriends(countF = 3) {
		return instance.get<GetUsersType>(`users?friend=true&count=${countF}`)
			.then(res => res.data)
	}

}
