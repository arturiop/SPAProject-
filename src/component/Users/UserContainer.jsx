
import { connect } from "react-redux";
import { getUsers, changePage, followTh, unFollowTh } from "../../redux/usersPageReducer";
import Users from "./User/Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import { getUser, getPageTotal, getPageCount, getCurrentPage, getIsFetching, getToggleFetching } from "../../redux/userSelect";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageCount);
	}

	onChangeNumb = (numb) => {
		this.props.changePage(numb, this.props.pageCount);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users {...this.props} onChangeNumb={this.onChangeNumb} />
		</>
	}
}

let mapStateToProps = (state) => ({
	uses: getUser(state),
	pageTotal: getPageTotal(state),
	pageCount: getPageCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	toggleFetching: getToggleFetching(state),
});



export default connect(mapStateToProps, { getUsers, changePage, followTh, unFollowTh })(UsersContainer);