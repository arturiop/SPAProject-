import { autoraithTh } from "./authReduser";

const INITIALIZED = "INITIALIZED";



let initializState = {
	initialized: false,

};

const appReduser = (state = initializState, action) => {
	switch (action.type) {
		case INITIALIZED: {
			return {
				...state,
				initialized: true
			}
		}

		default:
			return state;
	}

}



export const setInitialized = () => ({ type: INITIALIZED });



export const initializeApp = () => (dispatch) => {
	let promise = dispatch(autoraithTh());
	Promise.all([promise]).then(() => {
		dispatch(setInitialized());
	})

};



export default appReduser;