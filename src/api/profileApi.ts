import { PhotosType, ProfileType } from "../commonType/commonType";
import { InitialVFormik } from "../component/Profile/ProfileInfo/ContactProfileFrorm";
import { instance, APIResponseType } from "./api";


type SendPhotoType = { photos: PhotosType }

export const profileAPI = {
	getProfile(id: number | null) {
		return (
			instance.get<ProfileType>(`profile/${id}`)
				.then(response => response.data)
		);
	},

	getStatus(userId: number) {
		return (
			instance.get<string>(`profile/status/${userId}`)
		)
	},

	updateStatus(status: string) {
		return (
			instance.put<APIResponseType>(`profile/status/`, { status: status })
				.then(response => response.data)
		)
	},

	sendPhoto(photoFile: File) {
		const formData = new FormData();
		formData.append("image", photoFile)
		return (
			instance.put<APIResponseType<SendPhotoType>>('profile/photo/', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}).then(response => response.data)
		)
	},

	editProfile(obj: InitialVFormik) {
		return (
			instance.put<APIResponseType>('profile/', obj)
		).then(response => response.data)
	}

}