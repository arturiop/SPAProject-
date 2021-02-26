import { NavLink } from 'react-router-dom';
import { FriendsType } from '../../../redux/friendsPageReduser';
import s from './../Friends.module.css';

type PropsType = {
	source: FriendsType
}
const Friend: React.FC<PropsType> = ({ source }) => {

	return (
		<div className={s.friend}>
			<img className={s.img} src={source.imagePath} alt={''} />
			<div className={s.wraperFrends}>
				<NavLink to={"/" + source.id} >{`${source.name} ${source.lastName}`}</NavLink>
				<NavLink to="/artur">Write message</NavLink>
			</div>
		</div >
	);
}
export default Friend;