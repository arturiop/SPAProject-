import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profilePageReduser";
import dialogsReducer from "./dialogdsPageReduser";
import friendsReducer from "./friendsPageReduser";
import userReducer from "./usersPageReducer";
import authReduser from "./authReduser";
import thunk from 'redux-thunk';
import appReduser from "./appReduser";


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friends: friendsReducer,
	users: userReducer,
	auth: authReduser,
	app: appReduser,
});
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;