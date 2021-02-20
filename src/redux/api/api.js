import axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "2df9b762-0489-4f0f-ae9b-c0e61fffc513"
	}
});


export const usersAPI = {
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
	}
}

export const authAPI = {
	login(data) {
		return (
			instance.post('auth/login',
				{ email: data.login, password: data.password })
				.then(response => {
					return response.data
				})
		);
	},

	logout() {
		return (
			instance.delete('auth/login'
			)
				.then(response => {
					return response.data
				})
		);
	},

	autoraithe() {
		return (
			instance.get(`auth/me`, {
				withCredentials: true
			}).then(response => response.data)
		);
	}
}

export const profileAPI = {
	getProfile(id) {
		return (
			instance.get(`profile/${id}`)
				.then(response => response.data)
		);
	},

	getStatus(userId) {
		return (
			instance.get(`profile/status/${userId}`)
		)
	},

	updateStatus(status) {
		return (
			instance.put(`profile/status/`, { status: status })
		)
	}
}





