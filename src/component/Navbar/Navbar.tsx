import { NavLink } from 'react-router-dom';
import FriendsContainer from '../Friends/FriendsContainer';
import s from './Navbar.module.css';
const Navbar: React.FC = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
			</div>
			<div className={s.item}>
				<div className={s.item}>
					<NavLink activeClassName={s.active} to="/friends">Friends</NavLink>
				</div>
				<NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink activeClassName={s.active} to="/music">Music</NavLink>
			</div >
			<div className={s.item}>
				<NavLink activeClassName={s.active} to="/news">News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink activeClassName={s.active} to="/find/users">Find Users</NavLink>
			</div>
			<div className={s.item}>
				<NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
			</div>
			<div>
				<FriendsContainer />
			</div>

		</nav>
	);
}
export default Navbar;