import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {

	return (
		<header className={`${s.header} ${s.active}`}>
			<img className={s.img} src='https://pngimg.com/uploads/nike/nike_PNG8.png' />
			<span className={s.spn}>
				{props.isAuth ? props.login : <NavLink to="/login">login</NavLink>}

			</span>
		</header >
	);
}
export default Header;