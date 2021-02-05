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
		case ADD_POST:
			state.postsData.push({
				id: 21, count: '0', name: 'artur', value: state.newPostT
			});
			state.newPostT = '';
			return state;

		case NEW_TEXT_POST:
			state.newPostT = action.str;
			return state;

		default:
			return state;
	}
}

export const addCreactorPost = () => ({ type: ADD_POST });
export const addCreactorTextPost = (t) => ({ type: NEW_TEXT_POST, str: t });

export default profileReduser;