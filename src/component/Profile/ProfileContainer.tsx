import React, { useEffect } from 'react';
import s from './Profile.module.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getProfileTh, getStatusTh, updateStatusTh, sendPhoto, editProfile } from '../../redux/profilePageReduser';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/reduxStore';
import { ProfileType } from '../../commonType/commonType';
import { InitialVFormik } from './ProfileInfo/ContactProfileFrorm';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';


type MapStatePropsType = {
	profile: ProfileType | null
	status: string
	id: number | null
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
type PropsType = MapDispatchProps & OwnPropsType & MapStatePropsType & RouteComponentProps<RoutePropsType>
type RoutePropsType = {
	userId: string
}
export const ProfContainer: React.FC = (props) => {
	const idUser = useSelector((state: AppStateType) => state.auth.userId)

	const dispatch = useDispatch()
	const getProfile = (userId: number) => { dispatch(getProfileTh(userId)) }
	const getStatus = (userId: number) => { dispatch(getStatusTh(userId)) }
	const history = useHistory()
	const refreshProfile = () => {
		//@ts-ignore
		let userId: number | null = +props.match.params.userId;
		if (!userId) {
			userId = idUser
			if (!idUser) {
				history.push('/login')
			}
		}
		getProfile(userId as number);
		getStatus(userId as number);
	}
	useEffect(() => { //ВОСПРИНИМАТЬ КАК СИНХРОНИЗАЦИЮ
		refreshProfile()
	}, [])

	return (
		<div className={s.content} >
			<ProfileInfo />
			<MyPosts />
		</div >
	)
}
class ProfileContainer extends React.Component<PropsType> {

	refreshProfile() {
		let userId: number | null = +this.props.match.params.userId;
		if (!userId) {
			userId = this.props.id
			if (!userId) {

				this.props.history.push('/login')
			}
		}
		this.props.getProfileTh(userId as number);
		this.props.getStatusTh(userId as number);
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
				<ProfileInfo />
				<MyPosts />
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


export default compose<React.ComponentType>(
	withRouter,
	withAuthRedirect,
	connect<MapStatePropsType, MapDispatchProps, OwnPropsType, AppStateType>(mapStateToProps,
		{ getProfileTh, getStatusTh, updateStatusTh, sendPhoto, editProfile }))(ProfileContainer);