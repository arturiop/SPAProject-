import { combineReducers, createStore } from "redux";
import profileReducer from "./profilePageReduser";
import dialogsReducer from "./dialogdsPageReduser";
import friendsReducer from "./friendsPageReduser";
let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friends: friendsReducer
});
let store = createStore(reducers);
export default store;

import { combineReducers, createStore } from "redux";
import dialogReduser from "./dialogdsPageReduser";
import friendsReduser from "./friendsPageReduser";
import profileReduser from "./profilePageReduser";
let reducers = combineReducers({
	profile: profileReduser,
	dialog: dialogReduser,
	friends: friendsReduser
});
let store = createStore(reducers);
export default store;