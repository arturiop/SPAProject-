const ADD_POST = 'ADD-POST';
const NEW_TEXT_POST = 'NEW-TEXT-POST';

let initialState = {
	postsData: [
		{ id: '1', count: '5', name: 'Artur', value: 'hi' },
		{ id: '1', count: '1', name: 'Mukolai', value: 'hi' },
		{ id: '1', count: '2', name: 'Sanya', value: 'hi' }
	],
	newPostT: '',
};

const profileReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newP = { id: 21, count: '0', name: 'artur', value: state.newPostT };
			return {
				...state,
				postsData: [...state.postsData, newP],
				newPostT: ''
			};

		}
		case NEW_TEXT_POST: {
			return {
				...state,
				newPostT: action.str
			};


		}
		default:
			return state;
	}
}

export const addCreactorPost = () => ({ type: ADD_POST });
export const addCreactorTextPost = (t) => ({ type: NEW_TEXT_POST, str: t });

export default profileReduser;