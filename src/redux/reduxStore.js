import { combineReducers, createStore } from "redux";
import profileReducer from "./profilePageReduser";
import dialogsReducer from "./dialogdsPageReduser";
import friendsReducer from "./friendsPageReduser";
import userReducer from "./UsersPageReducer";
let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friends: friendsReducer,
	users: userReducer
});
let store = createStore(reducers);
export default store;