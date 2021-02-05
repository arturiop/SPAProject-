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
				{ id: '5', value: 'Idi nahui pidr' },
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
	getState() {
		return this._state;
	},
	newPost() {
		this._state.profilePage.postsData.push({
			id: 21, count: '0', name: 'artur', value: this._state.profilePage.newPostT
		});
		this._state.profilePage.newPostT = '';
		this._callSubscriber(this._state);
	},

	newTeForPost(str) {
		debugger;
		this._state.profilePage.newPostT = str;
		this._callSubscriber(this._state);
	},

	newTet(str) {
		this._state.dialogsPage.newTet = str;
		this._callSubscriber(this._state);
	},

	newMessage() {
		let newMess = {
			id: "21", value: this._state.dialogsPage.newTet
		};
		this._state.dialogsPage.messagesData.push(newMess);
		this._state.dialogsPage.newTet = '';
		this._callSubscriber(this._state);

	},
	subscribe(observer) {
		this._callSubscriber = observer;
	}
}
export default store;