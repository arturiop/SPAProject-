import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from "./profilePageReduser";
import dialogsReducer from "./dialogdsPageReduser";
import friendsReducer from "./friendsPageReduser";
import userReducer from "./usersPageReducer";
import authReduser from "./authReduser";
import thunk from 'redux-thunk';
import appReduser from "./appReduser";

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type ActionsTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesType<T>>

let rootReducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friends: friendsReducer,
	users: userReducer,
	auth: authReduser,
	app: appReduser,
});
type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;