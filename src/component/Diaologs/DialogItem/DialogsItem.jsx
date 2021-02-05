import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.dialog.id;
	let imgPath = props.dialog.imagePath;

	return (
		<div className={s.dialog}>
			<img className={s.img} src={imgPath} />
			<NavLink activeClassName={s.active} to={path}>{props.dialog.name}</NavLink>
		</div>
	);
}

export default DialogItem;