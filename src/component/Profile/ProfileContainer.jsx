import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileTh, getStatusTh, updateStatusTh, sendPhoto, editProfile } from '../../redux/profilePageReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.id
		}
		this.props.getProfileTh(userId);
		this.props.getStatusTh(userId);
	}

	componentDidMount() {
		this.refreshProfile();


	}
	componentDidUpdate(prevProps, prevState) {

		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}

	render() {
		return (
			<div className={s.content} >
				<Profile isOwner={!this.props.match.params.userId} {...this.props} />
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
	connect(mapStateToProps, { getProfileTh, getStatusTh, updateStatusTh, sendPhoto, editProfile }))(ProfileContainer);