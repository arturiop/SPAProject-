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
			let copyState = { ...state };
			copyState.postsData = [...state.postsData];
			copyState.postsData.push({
				id: 21, count: '0', name: 'artur', value: state.newPostT
			});
			copyState.newPostT = '';
			return copyState;
		}
		case NEW_TEXT_POST: {
			let copyState = { ...state };
			copyState.newPostT = action.str;
			return copyState;
		}
		default:
			return state;
	}
}

export const addCreactorPost = () => ({ type: ADD_POST });
export const addCreactorTextPost = (t) => ({ type: NEW_TEXT_POST, str: t });

export default profileReduser;