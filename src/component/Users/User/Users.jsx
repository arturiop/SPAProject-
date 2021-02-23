import s from './Users.module.css';
import PageGenerator from '../../common/PageGenerator/PageGenerator';
import User from './User/User';



const Users = (props) => {
	let userAccount = props.uses.map(item =>
		<User key={item.id} item={item} toggleFetching={props.toggleFetching}
			unFollowTh={props.unFollowTh} followTh={props.followTh} />)

	return (
		< div className={s.user} >
			<PageGenerator pageTotal={props.pageTotal} pageCount={props.pageCount}
				currentPage={props.currentPage} onChangeNumb={props.onChangeNumb} />
			{userAccount}
			< button className={s.button} > Show more</ button>
		</div >
	)
}

export default Users;
