import React from 'react';
import s from './Profile.module.css';

import { connect } from 'react-redux';
import { getProfileTh, getStatusTh, updateStatusTh, sendPhoto, editProfile } from '../../redux/profilePageReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import { compose } from 'redux';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { AppStateType } from '../../redux/reduxStore';
import { ProfileType } from '../../commonType/commonType';
import { InitialVFormik } from './ProfileInfo/ContactProfileFrorm';

type MapStatePropsType = {
	profile: ProfileType | null
	status: string
	id: number | null
	match?: any
}
type OwnPropsType = {
	own?: string
}
type MapDispatchProps = {
	getProfileTh: (userId: number) => void
	getStatusTh: (userId: number) => void
	updateStatusTh: (status: string) => void
	sendPhoto: (photos: any) => void
	editProfile: (objProperti: InitialVFormik) => void
}
type PropsType = MapDispatchProps & OwnPropsType & MapStatePropsType;

class ProfileContainer extends React.Component<PropsType> {

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

	componentDidUpdate(prevProps: PropsType) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}

	render() {
		let p = this.props;
		return (
			<div className={s.content} >
				<ProfileInfo editProfile={p.editProfile} sendPhoto={p.sendPhoto} isOwner={!this.props.match.params.userId}
					profile={p.profile} status={p.status} updateStatusTh={p.updateStatusTh} />
				<MyPostsContainer />
			</div >
		)
	}
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		id: state.auth.userId,
	}
};


export default compose(
	withRouter,
	withAuthRedirect,
	connect<MapStatePropsType, MapDispatchProps, OwnPropsType, AppStateType>(mapStateToProps,
		{ getProfileTh, getStatusTh, updateStatusTh, sendPhoto, editProfile }))(ProfileContainer);