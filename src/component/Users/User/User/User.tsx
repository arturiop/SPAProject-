import userIcon from '../../../../img/images.png';
import { NavLink } from 'react-router-dom';
import s from './../Users.module.css';
import { UserDataType } from '../../../../commonType/commonType';

type PropsType = {
	item: UserDataType
	toggleFetching: Array<number>
	unFollowTh: (id: number) => void
	followTh: (id: number) => void

}
const User: React.FC<PropsType> = ({ item, toggleFetching, unFollowTh, followTh }) => {
	return (
		<div className={s.content}>
			<div className={s.img_and_bt}>
				<NavLink to={`/profile/${item.id}`}>
					<img className={s.photo} alt={''}
						src={(item.photos.small != null) ? item.photos.small : userIcon} />
				</NavLink>
				<div>{item.followed
					? <button disabled={toggleFetching.some((id: number) => id === item.id)}
						onClick={() => { unFollowTh(item.id) }}>Unfollow</button>
					: <button disabled={toggleFetching.some((id: number) => id === item.id)}
						onClick={() => { followTh(item.id) }} >Follow</button>}
				</div>
			</div>
			<div className={s.data}>
				<div>{item.name}</div>
			</div>
		</div >
	)
}

export default User;

