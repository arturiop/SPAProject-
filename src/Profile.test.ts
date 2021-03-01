import { ProfileType } from "./commonType/commonType";
import profileReduser, { action } from "./redux/profilePageReduser";
import { AppStateType } from "./redux/reduxStore";

let state = {
	postsData: [
		{ id: 1, count: '5', name: 'Artur', value: 'hi' },
		{ id: 2, count: '1', name: 'Mukolai', value: 'hi' },
		{ id: 3, count: '2', name: 'Sanya', value: 'hi' }
	],
	post: '',
	profile: null as ProfileType | null,
	status: '',
};
type Ap = AppStateType
test('check creator', () => {
	let actionsss = action.addCreactorPost('trump');
	let newState = profileReduser(state, actionsss)
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
