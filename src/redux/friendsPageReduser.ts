export type FriendsType = {
	id: string
	name: string
	lastName: string
	imagePath: string
}
let initialState = {
	friendsData: [
		{ id: "1", name: "Artur", lastName: "Piloyan", imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
		{ id: "2", name: "Dart", lastName: "Weider", imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
		{ id: "3", name: "Bart", lastName: "Simpson", imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" }
	] as Array<FriendsType>,
};
export type InitializStateType = typeof initialState;

const friendsReduser = (state = initialState): InitializStateType => {
	return state;
}

export default friendsReduser;