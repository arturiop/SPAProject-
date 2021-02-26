const ADD_MESSAGE = 'ADD-MESSAGE';

export type DialogType = {
	id: string
	name: string
	imagePath: string
}
export type MessageType = {
	id: string
	value: string
}
let initialState = {
	dialogsData: [
		{ id: '1', name: 'Artur', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
		{ id: '2', name: 'Arturio', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
		{ id: '3', name: 'DartWaider', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
		{ id: '4', name: 'Enzo', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" },
		{ id: '5', name: 'Bart', imagePath: "https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" }
	] as Array<DialogType>,
	messagesData: [
		{ id: '1', value: 'Hi' },
		{ id: '2', value: 'HiBroo' },
		{ id: '3', value: 'White Power' },
		{ id: '4', value: 'Yo Arturio' },
		{ id: '5', value: 'hola' },
	] as Array<MessageType>,

};


export type InitialStateTypeDialog = typeof initialState;
type ActionType = AddCreactorMessageType
const dialogReduser = (state = initialState, action: ActionType): InitialStateTypeDialog => {

	switch (action.type) {
		case ADD_MESSAGE: {
			let newMess = { id: "21", value: action.newT };
			return {
				...state,
				messagesData: [...state.messagesData, newMess]
			};

		}

		default:
			return state;
	}
}

type AddCreactorMessageType = { type: typeof ADD_MESSAGE, newT: string }
export const addCreactorMessage = (newT: string): AddCreactorMessageType => ({ type: ADD_MESSAGE, newT });


export default dialogReduser;