
let initialState = {
	friendsData: [
		{ id: "1", name: "Artur", lastName: "Piloyan", imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
		{ id: "1", name: "Dart", lastName: "Weider", imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
		{ id: "1", name: "Bart", lastName: "Simpson", imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" }
	]
};
const friendsReduser = (state = initialState, action) => {
	return state;
}
export default friendsReduser;