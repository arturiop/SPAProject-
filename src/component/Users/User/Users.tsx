import s from './Users.module.css';
import PageGenerator from '../../common/PageGenerator/PageGenerator';
import User from './User/User';
import { UserDataType } from '../../../commonType/commonType';

type PropsType = {
	uses: Array<UserDataType>
	pageTotal: number
	pageCount: number
	currentPage: number
	toggleFetching: Array<number>
	followTh: (id: number) => void
	unFollowTh: (id: number) => void
	onChangeNumb: (numb: number) => void
}

const Users: React.FC<PropsType> = ({ uses,
	toggleFetching,
	followTh,
	unFollowTh,
	pageTotal,
	pageCount,
	currentPage,
	onChangeNumb }) => {

	let userAccount = uses.map(item =>
		<User key={item.id} item={item} toggleFetching={toggleFetching}
			unFollowTh={unFollowTh} followTh={followTh} />)

	return (
		< div className={s.user} >
			<PageGenerator pageTotal={pageTotal} pageCount={pageCount}
				currentPage={currentPage} onChangeNumb={onChangeNumb} />
			{userAccount}
			< button className={s.button} > Show more</ button>
		</div >
	)
}

export default Users;
