import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileTh, getStatusTh, updateStatusTh } from '../../redux/profilePageReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.id
		}
		this.props.getProfileTh(userId);
		this.props.getStatusTh(userId);

	}

	render() {

		return (
			<div className={s.content} >
				<Profile {...this.props} profile={this.props.profile} status={this.props.status}
					updateStatusTh={this.props.updateStatusTh} />
			</div >
		)
	}
}


let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		id: state.auth.userId,
	}
};


export default compose(
	withRouter,
	withAuthRedirect,
	connect(mapStateToProps, { getProfileTh, getStatusTh, updateStatusTh }))(ProfileContainer);