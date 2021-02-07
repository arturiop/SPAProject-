import { connect } from "react-redux";
import { setUsers, unFollowAC, followAC } from "../../../redux/UsersPageReducer";
import Users from "./Users";

let f1 = (state) => ({
	uses: state.users
});
let f2 = (dispatch) => {
	return {
		follow: (userId) => { dispatch(followAC(userId)) },
		unFollow: (userId) => { dispatch(unFollowAC(userId)) },
		setUsers: (users) => { dispatch(setUsers(users)) }
	};
}
const UsersContainer = connect(f1, f2)(Users);

export default UsersContainer;
