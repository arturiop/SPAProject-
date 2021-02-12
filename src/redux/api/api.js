import axios from "axios";


const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "2df9b762-0489-4f0f-ae9b-c0e61fffc513"
	}
});

export const commonAPI = {
	getUsers(currnt = 1, pgCount = 10) {
		return (
			instance.get(`users?page=${currnt}&count=${pgCount}`)
				.then(response => response.data)
		);
	},
	unfollow(id) {
		return (
			instance.delete(`follow/${id}`)
				.then(response => response.data)
		);
	},
	follow(id) {
		return (
			instance.post(`follow/${id}`)
				.then(response => response.data)
		);
	},
	autoraithe() {
		return (
			instance.get(`auth/me`, {
				withCredentials: true
			}).then(response => response.data)
		);
	},
	getUser(id) {
		return (
			instance.get(`profile/${id}`)
				.then(response => response.data)
		);
	}

}


