
import { connect } from "react-redux";
import { getUsers, changePage, followTh, unFollowTh } from "../../redux/usersPageReducer";
import Users from "./User/Users";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import { getUser, getPageTotal, getPageCount, getCurrentPage, getIsFetching, getToggleFetching } from "../../redux/userSelect";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAurhRedirect";
import { UserDataType } from "../../commonType/commonType";
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
	currentPage: number
	pageCount: number
	isFetching: boolean
	uses: Array<UserDataType>
	pageTotal: number
	toggleFetching: Array<number>
}
type MapDispatchPropsType = {
	getUsers: (currentPage: number, pageCount: number) => void
	changePage: (numb: number, pageCount: number) => void
	followTh: (id: number) => void
	unFollowTh: (id: number) => void
}
type OwnPropsType = {
	title: string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageCount);
	}

	onChangeNumb = (numb: number) => {
		this.props.changePage(numb, this.props.pageCount);
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			{this.props.title}
			<Users uses={this.props.uses}
				pageTotal={this.props.pageTotal}
				pageCount={this.props.pageCount}
				currentPage={this.props.currentPage}
				toggleFetching={this.props.toggleFetching}
				followTh={this.props.followTh}
				unFollowTh={this.props.unFollowTh}
				onChangeNumb={this.onChangeNumb} />
		</>
	}
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
	uses: getUser(state),
	pageTotal: getPageTotal(state),
	pageCount: getPageCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	toggleFetching: getToggleFetching(state),
});



export default compose(
	withAuthRedirect,
	(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
		mapStateToProps, { getUsers, changePage, followTh, unFollowTh }))
)(UsersContainer);