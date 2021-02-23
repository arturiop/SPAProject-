import axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "1f1850ac-6994-4f00-8632-17c6cdab6dee"
	}
});

export const securityAPI = {
	getCaptcha() {
		return instance.get('security/get-captcha-url')
	}
}

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
				{ email: data.login, password: data.password, captcha: data.captcha })
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
	},

	sendPhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile)
		return (
			instance.put('profile/photo/', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
		)
	},

	editProfile(obj) {
		return (
			instance.put('profile/', obj)
		)
	}

}




