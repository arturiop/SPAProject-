import { NavLink } from 'react-router-dom';
import s from './../Friends.module.css';

const Friend = (props) => {

	let imgPath = props.source.imagePath;

	return (
		<div className={s.friend}>
			<img className={s.img} src={imgPath} alt={''} />
			<div className={s.wraperFrends}>
				<NavLink to={"/" + props.source.id} >{`${props.source.name} ${props.source.lastName}`}</NavLink>
				<NavLink to="/artur">Write message</NavLink>
			</div>
		</div >
	);
}
export default Friend;