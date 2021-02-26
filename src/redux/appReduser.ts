import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { autoraithTh } from "./authReduser";
import { AppStateType } from "./reduxStore";

const INITIALIZED = "INITIALIZED";

type InitializStateType = {
	initialized: boolean
}

let initializState: InitializStateType = {
	initialized: false
};
type ActionType = SetInitializedType
const appReduser = (state = initializState, action: ActionType): InitializStateType => {
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

type SetInitializedType = {
	type: typeof INITIALIZED
}

export const setInitialized = (): SetInitializedType => ({ type: INITIALIZED });

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
export const initializeApp = () => (dispatch: any) => {
	let promise = dispatch(autoraithTh());
	Promise.all([promise]).then(() => {
		dispatch(setInitialized());
	})
};


export default appReduser;