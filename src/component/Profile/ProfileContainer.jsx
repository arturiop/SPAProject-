import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profilePageReduser';
import { withRouter } from 'react-router-dom';
import { commonAPI } from '../../redux/api/api';

class ProfileContainer extends React.Component {

	componentDidMount() {

		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 14841;
		}
		commonAPI.getUser(userId)
			.then(data => this.props.setProfile(data));
	}
	render() {
		return (
			<div className={s.content} >
				<Profile {...this.props} profile={this.props.profile} />
			</div >
		)
	}
}


const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
};

let ContainerForRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setProfile })(ContainerForRouter);