import s from './Users.module.css';
import userIcon from '../../../img/images.png';
import { NavLink } from 'react-router-dom';


const Users = (props) => {

	let pageC = Math.ceil(props.pageTotal / props.pageCount);
	let pageArray = [];
	for (let i = 1; i <= pageC; i++) {
		pageArray.push(i);
	}

	return (
		< div className={s.user} >
			{
				pageArray.map(item => {
					let itemcount = props.currentPage;
					if ((item >= (itemcount - 2)) && (item <= (itemcount + 2))) {
						return (<span onClick={e => { props.onChangeNumb(item) }}
							className={props.currentPage === item && s.thisPage}
						>{` ${item}`}</span>);
					} else if (pageArray.length === item) {
						return (<span
							onClick={e => { props.onChangeNumb(item) }}
							className={props.currentPage === item && s.thisPage}
						>{` ...${item}`}</span>);
					}
				})
			}

			{
				props.uses.map(item =>
					<div className={s.content}>
						<div className={s.img_and_bt}>
							<NavLink to={`/profile/${item.id}`}>
								<img className={s.photo}
									src={(item.photos.small != null) ? item.photos.small : userIcon} />
							</NavLink>
							<div>{item.followed
								? <button disabled={props.toggleFetching.some(id => id === item.id)}
									onClick={() => { props.unFollowTh(item.id) }}>Unfollow</button>
								: <button disabled={props.toggleFetching.some(id => id === item.id)}
									onClick={() => { props.followTh(item.id) }} >Follow</button>}
							</div>
						</div>
						<div className={s.data}>
							<div>{item.name}</div>
							<div>{item.country}</div>
							<div>{item.city}</div>
							<span>{item.quote}</span>
						</div>
					</div >)
			}
			< button className={s.button} > Show more</ button>
		</div >

	)
}

export default Users;
