import profileReduser, { addCreactorPost, addT, deletetPost } from "./redux/profilePageReduser";

let state = {
	postsData: [
		{ id: '1', count: '5', name: 'Artur', value: 'hi' },
		{ id: '2', count: '1', name: 'Mukolai', value: 'hi' },
		{ id: '3', count: '2', name: 'Sanya', value: 'hi' }
	],
	post: '',
};

test('check creator', () => {
	const action = addCreactorPost('trump');
	let newState = profileReduser(state, action)
	expect(newState.postsData.length).toBe(4);
});

// test('check deletor', () => {
// 	const action = deletetPost('2');
// 	let newState = profileReduser(state, action)
// 	expect(newState.postsData.length).toBe(2);
// });

// test('check deletor', () => {
// 	const action = addT('arturio');
// 	let newState = profileReduser(state, action)
// 	expect(newState.post).toBe('arturio');
// });
