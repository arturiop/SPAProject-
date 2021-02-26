import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHook from './ProfileStatusWithHook';
import iconUser from './../../../img/images.png';
import ContactProfile from './ContactProfile';
import React, { ChangeEvent, useState } from 'react';
import ContactProfileFrorm, { InitialVFormik } from "./ContactProfileFrorm";
import { ProfileType } from '../../../commonType/commonType';


type PropsType = {
	profile: ProfileType | null
	sendPhoto: any
	isOwner: boolean
	status: string
	updateStatusTh: (status: string) => void
	editProfile: (objProperti: InitialVFormik) => void

}
const ProfileInfo: React.FC<PropsType> = (props) => {

	let [editMode, setEditMode] = useState(false);


	let pf = props.profile;
	if (!pf) {
		return <Preloader />
	}
	const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			props.sendPhoto(e.target.files[0])
		}
	}

	const editProfileData = (obj: InitialVFormik) => {
		props.editProfile(obj);
		setEditMode(false);
	}

	const activeEditMode = () => {
		setEditMode(true);
	}


	return (
		<div className={s.wrapper}>
			<div>
				<div className={s.pagePhoto}>
					<img alt='' src={pf.photos.small || iconUser} className={s.userIcon} />
				</div>

				{props.isOwner && <input type={'file'} onChange={selectFile} />}
			</div>

			{editMode ? <ContactProfileFrorm pf={pf} editProfileData={editProfileData} />
				: <ContactProfile pf={pf} activeEditMode={activeEditMode} isOwner={props.isOwner} />}

			<ProfileStatusWithHook status={props.status} updateStatusTh={props.updateStatusTh} />
		</div >
	);
}


export default ProfileInfo;