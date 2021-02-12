import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserTh } from '../../redux/profilePageReduser';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 14841;
		}
		this.props.getUserTh(userId);

	}
	render() {
		return (
			<div className={s.content} >
				<Profile {...this.props} profile={this.props.profile} />
			</div >
		)
	}
}


let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
	}
};


export default compose(
	withRouter,
	connect(mapStateToProps, { getUserTh }),
	withAuthRedirect)(ProfileContainer);