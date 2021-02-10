
import { connect } from "react-redux";
import { setUsers, unFollow, follow, setCurrent, setTotalUsers, switchFetch } from "../../redux/usersPageReducer";
import Users from "./User/Users";
import React from 'react';
import * as axios from 'axios';
import Preloader from "../common/Preloader";



class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.switchFetch(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCount}`).then(response => {
			this.props.switchFetch(false);
			this.props.setUsers(response.data.items);
			this.props.setTotalUsers(response.data.totalCount);
		})
	}
	onChangeNumb = (numb) => {
		this.props.setCurrent(numb);
		this.props.switchFetch(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numb}&count=${this.props.pageCount}`)
			.then(response => {
				this.props.switchFetch(false);
				this.props.setUsers(response.data.items);
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