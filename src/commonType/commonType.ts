


export type UserDataType = {
	uniqueUrlName: string | null
	id: number
	name: string
	status: string | null
	photos: PhotosType
	followed: boolean
}
export type PhotosType = {
	small: string | null
	large: string | null
}
export type ProfileType = {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: Array<ContactsType>
	photos: PhotosType
	aboutMe: string

}
export type PostDataType = {
	id: number
	count: string
	name: string
	value: string
}
export type ContactsType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
	index: number
}