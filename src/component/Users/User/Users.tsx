import s from './Users.module.css';
import User from './User/User';
import { useDispatch, useSelector } from 'react-redux';
import { getToggleFetching, getUser } from '../../../redux/userSelect';
import { followTh, unFollowTh } from '../../../redux/usersPageReducer';
import { UserDataType } from '../../../commonType/commonType';

type PropsType = {}
export const Users: React.FC<PropsType> = (props) => {

	const toggleFetching = useSelector(getToggleFetching)
	const uses = useSelector(getUser)
	const dispatch = useDispatch()

	const followThy = (userid: number) => {
		dispatch(followTh(userid))
	}
	const unFollowThy = (userid: number) => {
		dispatch(unFollowTh(userid))
	}

	let userAccount = uses.map((item: UserDataType) =>
		<User key={item.id} item={item} toggleFetching={toggleFetching}
			unFollowTh={unFollowThy} followTh={followThy} />)

	return (
		< div className={s.user} >
			{userAccount}
			< button className={s.button} > Show more</ button>
		</div >
	)
}


