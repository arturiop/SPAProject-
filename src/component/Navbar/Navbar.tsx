import { NavLink } from 'react-router-dom';
import { Friends } from '../Friends/FriendsContainer';
import s from './Navbar.module.css';
import { Menu } from 'antd';

const Navbar: React.FC = () => {
	return (
		<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
			<Menu.Item key="1" icon={<div></div>}>
				<NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
			</Menu.Item>
			<Menu.Item key="2" icon={<div></div>}>
				<NavLink activeClassName={s.active} to="/friends">Friends</NavLink>
			</Menu.Item>
			<Menu.Item key="3" icon={<div></div>}>
				<NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
			</Menu.Item>
			<Menu.Item key="4" icon={<div></div>}>
				<NavLink activeClassName={s.active} to="/music">Music</NavLink>
			</Menu.Item>
			<Menu.Item key="5" icon={<div></div>}>
				<NavLink activeClassName={s.active} to="/news">News</NavLink>
			</Menu.Item>
			<Menu.Item key="6" icon={<div></div>}>
				<NavLink activeClassName={s.active} to="/find/users">Find Users</NavLink>
			</Menu.Item>
			<Menu.Item key="7" icon={<div></div>}>
				<NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
			</Menu.Item>
			<Menu.Item key="8" icon={<div></div>}>
				<NavLink activeClassName={s.active} to="/chat">Common Chat</NavLink>
			</Menu.Item>
			<div>
				<Friends />
			</div>
		</Menu>
	);
}
export default Navbar;