import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { autoraithTh } from "./authReduser";
import { ActionsTypes, AppStateType, CommonThunkActionType } from "./reduxStore";

const INITIALIZED = "INITIALIZED";

type InitializStateType = typeof initializState

let initializState = {
	initialized: false
};
type ActionType = ActionsTypes<typeof action>

const appReduser = (state = initializState, action: ActionType): InitializStateType => {
	switch (action.type) {
		case "INITIALIZED": {
			return {
				...state,
				initialized: true
			}
		}
		default:
			return state;
	}
}

const action = {
	setInitialized: () => ({ type: "INITIALIZED" } as const)
}


type ThunkType = CommonThunkActionType<ActionType, void>
export const initializeApp = (): ThunkType => (dispatch) => {
	let promise = dispatch(autoraithTh());
	Promise.all([promise]).then(() => {
		dispatch(action.setInitialized());
	})
};


export default appReduser;