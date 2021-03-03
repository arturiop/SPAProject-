import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import Friend from './Friend/Friend';
import s from './Friends.module.css'
import { getFriendsTh } from '../../redux/friendsPageReduser';
import { useEffect } from 'react';


export const Friends: React.FC = () => {

	const friendsData = useSelector((state: AppStateType) => state.friends.friendsData)
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getFriendsTh())
	}, [])

	let friend = friendsData.map((friend) => <Friend key={friend.id} item={friend} />)

	return (
		<div className={s.friends}>
			{friend}
		</div >
	);
}

