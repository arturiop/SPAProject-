import { NavLink } from 'react-router-dom';
import { UserDataType } from '../../../commonType/commonType';
import userIcon from '../../../img/img.webp'
import s from './Friend.module.css';

type PropsType = {
	item: UserDataType
}
const Friend: React.FC<PropsType> = ({ item }) => {

	return (
		<div className={s.friend}>
			<div className={s.img}>
				<NavLink to={`/profile/${item.id}`}>
					<img className={s.photo} alt={''} width="40" height="40"
						src={(item.photos.small != null) ? item.photos.small : userIcon} />
					<span className={s.name}>{item.name}</span>
				</NavLink>
			</div>

		</div >
	);
}
export default Friend;

