import userIcon from '../../../../img/images.png';
import { NavLink } from 'react-router-dom';
import s from './../Users.module.css';
import { UserDataType } from '../../../../commonType/commonType';
import { Button } from 'antd';

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

			</div>
			<div className={s.data}>
				<div className={s.name}>{item.name}</div>
				<div>{item.followed
					? <Button type={'default'} disabled={toggleFetching.some((id: number) => id === item.id)}
						onClick={() => { unFollowTh(item.id) }}>Unfollow</Button>
					: <Button type={'primary'} disabled={toggleFetching.some((id: number) => id === item.id)}
						onClick={() => { followTh(item.id) }} >Follow</Button>}
				</div>
			</div>
		</div >
	)
}

export default User;

