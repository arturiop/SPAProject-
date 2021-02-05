import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div >
			<div>
				<img className={s.imgeing} src='https://tech.informator.ua/wp-content/uploads/2019/04/youtube.jpg' />
			</div>
			<div>
				ava + content
			</div>

		</div>
	);
}
export default ProfileInfo;