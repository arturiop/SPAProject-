import React from 'react';
import axios from 'axios';
import s from './Profile.module.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profilePageReduser';

class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
			.then(response => this.props.setProfile(response.data));
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

export default connect(mapStateToProps, { setProfile })(ProfileContainer);