import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

	return (
		<div className={s.content}>
			<ProfileInfo />
			<MyPosts post={props.data} dispatch={props.dispatch} />
		</div>

	);
}
export default Profile;