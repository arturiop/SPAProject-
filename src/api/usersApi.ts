import { UserDataType } from "../commonType/commonType";
import { instance, APIResponseType } from "./api";

type GetUsersType = {
	error: null | string
	items: Array<UserDataType>
	totalCount: number
}

export const usersAPI = {
	getUsers(currnt = 1, pgCount = 10) {
		return (
			instance.get<GetUsersType>(`users?page=${currnt}&count=${pgCount}`)
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
			instance.post<APIResponseType>(`follow/${id}`).then(response => response.data)
		);
	}
}
