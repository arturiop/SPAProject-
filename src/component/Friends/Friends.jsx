import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
	debugger;
	let friend = props.data.friendsData.map((friend) => <Friend source={friend} />)
	return (
		<div className={s.friends}>
			{friend}
		</div >
	);
}
export default Friends;