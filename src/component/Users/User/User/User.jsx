import userIcon from '../../../../img/images.png';
import { NavLink } from 'react-router-dom';
import s from './../Users.module.css';

const User = (props) => {
	return (
		<div className={s.content}>
			<div className={s.img_and_bt}>
				<NavLink to={`/profile/${props.item.id}`}>
					<img className={s.photo} alt={''}
						src={(props.item.photos.small != null) ? props.item.photos.small : userIcon} />
				</NavLink>
				<div>{props.item.followed
					? <button disabled={props.toggleFetching.some(id => id === props.item.id)}
						onClick={() => { props.unFollowTh(props.item.id) }}>Unfollow</button>
					: <button disabled={props.toggleFetching.some(id => id === props.item.id)}
						onClick={() => { props.followTh(props.item.id) }} >Follow</button>}
				</div>
			</div>
			<div className={s.data}>
				<div>{props.item.name}</div>
				<div>{props.item.country}</div>
				<div>{props.item.city}</div>
				<span>{props.item.quote}</span>
			</div>
		</div >
	)
}

export default User;

