
import { connect } from "react-redux";
import { getUsers, changePage, followTh, unFollowTh } from "../../redux/usersPageReducer";
import Users from "./User/Users";
import React from 'react';
import Preloader from "../common/Preloader";

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
			<Users uses={this.props.uses} {...this.props} onChangeNumb={this.onChangeNumb} />
		</>
	}
}

let mapStateToProps = (state) => ({
	uses: state.users,
	pageTotal: state.users.pageTotal,
	pageCount: state.users.pageCount,
	currentPage: state.users.currentPage,
	isFetching: state.users.isFetching,
	toggleFetching: state.users.toggleFetching,
});


export default connect(mapStateToProps, {
	getUsers, changePage, followTh, unFollowTh
})(UsersContainer);