import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserTh } from '../../redux/profilePageReduser';
import { withRouter } from 'react-router-dom';

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


const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	}
};

let ContainerForRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserTh })(ContainerForRouter);