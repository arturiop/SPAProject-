import { NavLink } from 'react-router-dom';
import { DialogType } from '../../../redux/dialogdsPageReduser';
import s from './../Dialogs.module.css';
type PropsType = {
	dialog: DialogType
}
const DialogItem: React.FC<PropsType> = ({ dialog }) => {
	let path = "/dialogs/" + dialog.id;
	let imgPath = dialog.imagePath;

	return (
		<div className={s.dialog}>
			<img className={s.img} src={imgPath} alt={''} />
			<NavLink activeClassName={s.active} to={path}>{dialog.name}</NavLink>
		</div>
	);
}

export default DialogItem;