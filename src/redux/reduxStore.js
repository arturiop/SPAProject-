import { combineReducers, createStore } from "redux";
import dialogReduser from "./dialogdsPageReduser";
import friendsReduser from "./friendsPageReduser";
import profileReduser from "./profilePageReduser";



let redusers = combineReducers({
	profileReduser,
	dialogReduser,
	friendsReduser,
});

let store = createStore();

export default store;