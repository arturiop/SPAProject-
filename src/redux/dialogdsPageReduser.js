const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_TEXT_MESSAGE = 'NEW-TEXT-MESSAGE';

let initialState = {
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
};

const dialogReduser = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE: {
			let stateCopy = { ...state };
			stateCopy.messagesData = [...state.messagesData];
			let newMess = {
				id: "21", value: state.newTet
			};
			stateCopy.messagesData.push(newMess);
			stateCopy.newTet = '';
			return stateCopy;
		}
		case NEW_TEXT_MESSAGE: {
			let stateCopy = { ...state };
			stateCopy.newTet = action.str;
			return stateCopy;
		}
		default:
			return state;
	}
}


export const addCreactorMessage = () => ({ type: ADD_MESSAGE });
export const addCreactorTextMessage = (t) => ({ type: NEW_TEXT_MESSAGE, str: t });

export default dialogReduser;