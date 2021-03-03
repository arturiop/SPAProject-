import { Button } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { singOutTh } from '../../redux/authReduser';
import { AppStateType } from '../../redux/reduxStore';
import s from './Header.module.css';

type PropsType = {}
export const HeaderCompont: React.FC<PropsType> = (props) => {
	const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
	const login = useSelector((state: AppStateType) => state.auth.login)
	const photoSrc = useSelector((state: AppStateType) => state.profilePage.profile?.photos.small)


	return (
		<div style={{ color: 'yellow' }}>
			{isAuth
				? <div >
					<Avatar src={(photoSrc) as string} />
					{login}
				</div>
				: <Button type='primary'><NavLink to="/login">login</NavLink></Button>}
		</div>

	);
}