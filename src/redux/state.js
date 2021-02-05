import dialogReduser from "./dialogdsPageReduser";
import profileReduser from "./profilePageReduser";
import friendsReduser from "./friendsPageReduser";

let store = {
	_callSubscriber() {
		console.log("kz");
	},
	_state: {
		dialogsPage: {
			dialogsData: [
				{ id: '1', name: 'Artur', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
				{ id: '2', name: 'Arturio', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
				{ id: '3', name: 'DartWaider', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
				{ id: '4', name: 'Enzo', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
				{ id: '5', name: 'Bart', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" }
			],
			messagesData: [
				{ id: '1', value: 'Hi' },
				{ id: '2', value: 'HiBroo' },
				{ id: '3', value: 'White Power' },
				{ id: '4', value: 'Yo Arturio' },
				{ id: '5', value: 'hola' },
			],
			newTet: '',
		},
		profilePage: {
			postsData: [
				{ id: '1', count: '5', name: 'Artur', value: 'hi' },
				{ id: '1', count: '1', name: 'Mukolai', value: 'hi' },
				{ id: '1', count: '2', name: 'Sanya', value: 'hi' }
			],
			newPostT: '',
		},
		friendsPage: {
			friendsData: [
				{ id: "1", name: "Artur", lastName: "Piloyan", imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
				{ id: "1", name: "Dart", lastName: "Weider", imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
				{ id: "1", name: "Bart", lastName: "Simpson", imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" }
			]
		},
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	getState() {
		return this._state;
	},

	dispatch(action) {
		this._state.profilePage = profileReduser(this._state.profilePage, action);
		this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action);
		this._state.friendsPage = friendsReduser(this._state.friendsPage, action);
		this._callSubscriber(this._state);
	},

}


export default store;