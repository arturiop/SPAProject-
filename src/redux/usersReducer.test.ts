import userReducer, { action, InitializStateType } from "./usersPageReducer"

let state: InitializStateType;
beforeEach(() => {
	let state = {

		userData: [{
			uniqueUrlName: null,
			id: 0,
			name: 'artur0',
			status: "status",
			photos: { small: null, large: null },
			followed: false
		},
		{
			uniqueUrlName: null,
			id: 1,
			name: 'artur1',
			status: "status",
			photos: { small: null, large: null },
			followed: false
		},
		{
			uniqueUrlName: null,
			id: 2,
			name: 'artur2',
			status: "status",
			photos: { small: null, large: null },
			followed: true
		},
		{
			uniqueUrlName: null,
			id: 3,
			name: 'artur3',
			status: "status",
			photos: { small: null, large: null },
			followed: false
		}],
		pageTotal: 20,
		pageCount: 3,
		currentPage: 1,
		isFetching: false,
		toggleFetching: [] as Array<number>,
	};
})


test('follow sucsses', () => {


	const newState = userReducer(state, action.follow(1))
	expect(newState.userData[0].followed).toBeFalsy()
	expect(newState.userData[1].followed).toBeTruthy()
})