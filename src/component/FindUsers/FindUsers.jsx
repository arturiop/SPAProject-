
import { connect } from 'react-redux';
import s from './FindUsers.module.css';

import UsersContainer from './User/UsersContainer';


const FindUsers = (props) => {

	return (
		<div className={s.content}>
			<UsersContainer />
		</div>

	);
}
export default FindUsers;