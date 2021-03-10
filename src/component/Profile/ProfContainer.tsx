import React, { useEffect } from 'react';
import s from './Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileTh, getStatusTh, } from '../../redux/profilePageReduser';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/reduxStore';
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import useReactRouter from 'use-react-router';


type PropsType = RouteComponentProps<RoutePropsType>
type RoutePropsType = {
	userId: string
}

export const ProfConteiner: React.FC<PropsType> = (props) => {
	const idUser = useSelector((state: AppStateType) => state.auth.userId)
	const { history } = useReactRouter();

	const dispatch = useDispatch()
	const getProfile = (userId: number) => { dispatch(getProfileTh(userId)) }
	const getStatus = (userId: number) => { dispatch(getStatusTh(userId)) }

	const refreshProfile = () => {
		let userId: number | null = +props.match.params?.userId;
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

	useEffect(() => { refreshProfile() }, [props.match.params.userId])
	return (
		<div className={s.content} >
			<ProfileInfo isOwner={!props.match.params.userId} />
			<MyPosts />
		</div >
	)
}

export default compose<React.ComponentType>(
	withRouter,
	withAuthRedirect,
)(ProfConteiner);