import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import iconUser from './../../../img/images.png';
import ContactProfile from './ContactProfile';
import React, { ChangeEvent, memo, useState } from 'react';
import ContactProfileFrorm, { InitialVFormik } from "./ContactProfileFrorm";
import { ProfileType } from '../../../commonType/commonType';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/reduxStore';
import { editProfile, sendPhoto, updateStatusTh } from '../../../redux/profilePageReduser';


type PropsType = { isOwner: boolean }
export const ProfileInfo: React.FC<PropsType> = memo((props) => {

	const profile = useSelector((state: AppStateType) => state.profilePage.profile)
	const status = useSelector((state: AppStateType) => state.profilePage.status)

	const dispatch = useDispatch()
	const editProf = (objProperti: InitialVFormik) => { dispatch(editProfile(objProperti)) }
	const sendPhotoT = (file: File) => { dispatch(sendPhoto(file)) }
	const updateStatusThT = (status: string) => { dispatch(updateStatusTh(status)) }


	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Preloader />
	}
	const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files?.length) {
			sendPhotoT(e.target.files[0])
		}
	}

	const editProfileData = (obj: InitialVFormik) => {
		editProf(obj);
		setEditMode(false);
	}

	const activeEditMode = () => {
		setEditMode(true);
	}

	return (
		<div className={s.wrapper}>
			<div>
				<div className={s.pagePhoto}>
					<img alt='' src={profile.photos.small || iconUser} className={s.userIcon} />
				</div>

				{props.isOwner && <input type={'file'} onChange={selectFile} />}
			</div>

			{editMode ? <ContactProfileFrorm isOwner={props.isOwner} pf={profile} editProfileData={editProfileData} />
				: <ContactProfile isOwner={props.isOwner} pf={profile} activeEditMode={activeEditMode} />}

			<ProfileStatusWithHook status={status} updateStatusTh={updateStatusThT} />
		</div >
	);
})
