import { connect } from "react-redux";
import { setUsers, unFollowAC, followAC, setCurrent, setTotalUsersAC } from "../../../redux/UsersPageReducer";
import Users from "./Users";

let f1 = (state) => ({
	uses: state.users,
	pageTotal: state.users.pageTotal,
	pageCount: state.users.pageCount,
	currentPage: state.users.currentPage

});
let f2 = (dispatch) => {
	return {
		follow: (userId) => { dispatch(followAC(userId)) },
		unFollow: (userId) => { dispatch(unFollowAC(userId)) },
		setUsers: (users) => { dispatch(setUsers(users)) },
		setCurrent: (p) => { dispatch(setCurrent(p)) },
		setTotalUser: (count) => { dispatch(setTotalUsersAC(count)) }

	};
}
const UsersContainer = connect(f1, f2)(Users);

export default UsersContainer;
