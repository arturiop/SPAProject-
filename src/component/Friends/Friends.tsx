import { FriendsType } from '../../redux/friendsPageReduser';
import Friend from './Friend/Friend';
import s from './Friends.module.css';

type PropsType = {
	friendsData: Array<FriendsType>
}
const Friends: React.FC<PropsType> = ({ friendsData }) => {
	let friend = friendsData.map((friend) => <Friend key={friend.id} source={friend} />)
	return (
		<div className={s.friends}>
			{friend}
		</div >
	);
}
export default Friends;