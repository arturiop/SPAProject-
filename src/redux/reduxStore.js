import { applyMiddleware, combineReducers, createStore, compose } from "redux";
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



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;