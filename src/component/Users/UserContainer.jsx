
import { connect } from "react-redux";
import { setUsers, unFollow, follow, setCurrent, setTotalUsers, switchFetch } from "../../redux/usersPageReducer";
import Users from "./User/Users";
import React from 'react';
import Preloader from "../common/Preloader";
import { commonAPI } from "../../redux/api/api";




class UsersContainer extends React.Component {

	componentDidMount() {

		this.props.switchFetch(true);
		commonAPI.getUsers(this.props.currentPage, this.props.pageCount)
			.then(data => {
				this.props.switchFetch(false);
				this.props.setUsers(data.items);
				this.props.setTotalUsers(data.totalCount);
			})
	}
	onChangeNumb = (numb) => {
		this.props.setCurrent(numb);
		this.props.switchFetch(true);
		commonAPI.getUsers(numb, this.props.pageCount)
			.then(data => {
				this.props.switchFetch(false);
				this.props.setUsers(data.items);
			})
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users uses={this.props.uses}
				follow={this.props.follow}
				unFollow={this.props.unFollow}
				setCurrent={this.props.setCurrent}
				onChangeNumb={this.onChangeNumb}
				pageTotal={this.props.pageTotal}
				pageCount={this.props.pageCount}
				currentPage={this.props.currentPage}
			/>
		</>
	}
}


let mapStateToProps = (state) => ({
	uses: state.users,
	pageTotal: state.users.pageTotal,
	pageCount: state.users.pageCount,
	currentPage: state.users.currentPage,
	isFetching: state.users.isFetching,
});


export default connect(mapStateToProps, {
	follow, unFollow, setUsers, setCurrent, setTotalUsers, switchFetch
})(UsersContainer);