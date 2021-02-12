import { NavLink } from 'react-router-dom';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStaus';

const ProfileInfo = (props) => {

	let pf = props.profile;
	if (!pf) {
		return <Preloader />
	}

	return (
		<div className={s.wrapper}>

			<div>
				<div className={s.pagePhoto}>
					<img src={pf.photos.small} />
				</div>

				<div>
					<span>{`My jobs possition: ${pf.lookingForAJobDescription}`}</span>
				</div>
			</div>

			<div className={s.containerContacts}>
				<div className={s.adoutUser}>
					<span>{`About me: ${pf.aboutMe}`}</span>
				</div>

				<div className={s.contacts}>
					<span>Contacts:</span> <br />
					<NavLink to="fb.com">{pf.contacts.facebook}</NavLink> <br />
					<NavLink to="vk.com">{pf.contacts.vk}</NavLink><br />
					<NavLink to="instagram.com">{pf.contacts.instagram}</NavLink>

				</div>
			</div>

			<ProfileStatus />


		</div >
	);
}
export default ProfileInfo;