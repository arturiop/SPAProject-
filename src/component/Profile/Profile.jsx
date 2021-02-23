
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
	return (

		<div className={s.content}>
			<ProfileInfo editProfile={props.editProfile} sendPhoto={props.sendPhoto} isOwner={props.isOwner}
				profile={props.profile} status={props.status} updateStatusTh={props.updateStatusTh} />
			<MyPostsContainer />
		</div>

	);
}
export default Profile;