import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profilePageReduser";
import dialogsReducer from "./dialogdsPageReduser";
import friendsReducer from "./friendsPageReduser";
import userReducer from "./usersPageReducer";
import authReduser from "./authReduser";
import thunk from 'redux-thunk';


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	friends: friendsReducer,
	users: userReducer,
	auth: authReduser
});
let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;