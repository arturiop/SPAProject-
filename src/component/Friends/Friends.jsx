import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
	let friend = props.friends.friendsData.map((friend) => <Friend source={friend} />)
	return (
		<div className={s.friends}>
			{friend}
		</div >
	);
}
export default Friends;