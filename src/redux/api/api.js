import axios from "axios";
const BASE_URL = 'https://social-network.samuraijs.com/api/1.0/';

export const commonAPI = {
	getUsers(currnt = 1, pgCount = 10) {
		return (
			axios.get(BASE_URL + `users?page=${currnt}&count=${pgCount}`, {
				withCredentials: true
			}).then(response => response.data)
		);
	},
	deletePiece(id) {
		return (
			axios.delete(BASE_URL + `follow/${id}`, {
				withCredentials: true,
				headers: {
					"API-KEY": "2df9b762-0489-4f0f-ae9b-c0e61fffc513"
				}
			}).then(response => response.data)
		);
	},
	following(id) {
		return (
			axios.post(BASE_URL + `follow/${id}`, {}, {
				withCredentials: true,
				headers: {
					"API-KEY": "2df9b762-0489-4f0f-ae9b-c0e61fffc513"
				}
			}).then(response => response.data)
		);

	},
	autoraithe() {
		return (
			axios.get(BASE_URL + `auth/me`, {
				withCredentials: true
			}).then(response => response.data)
		);
	},
	getUser(id) {
		return (
			axios.get(BASE_URL + `profile/${id}`).then(response => response.data)
		);
	}

}


