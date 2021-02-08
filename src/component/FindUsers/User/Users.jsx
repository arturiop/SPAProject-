import React from 'react';
import u from './Users.module.css';
import * as axios from 'axios';
import s from './Userrrr/Userrrs.module.css';
import userIcon from '../../../img/images.png';

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCount}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUser(response.data.totalCount);
		})
	}
	onChangeNumb = (numb) => {
		this.props.setCurrent(numb);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numb}&count=${this.props.pageCount}`).then(response => {
			this.props.setUsers(response.data.items);
		})
	}

	render() {
		let pageC = Math.ceil(this.props.pageTotal / this.props.pageCount);

		let pageArray = [];
		for (let i = 1; i <= pageC; i++) {
			pageArray.push(i);
		}
		console.log(pageArray);



		return (
			< div className={u.user} >
				{
					pageArray.map(item => {
						let itemcount = this.props.currentPage;
						if ((item >= (itemcount - 2)) && (item <= (itemcount + 2))) {
							return (<span onClick={e => { this.onChangeNumb(item) }}
								className={this.props.currentPage === item && u.thisPage} >{` ${item}`}</span>);
						} else if (pageArray.length === item) {
							return (<span onClick={e => { this.onChangeNumb(item) }}
								className={this.props.currentPage === item && u.thisPage} >{` ...${item}`}</span>);
						}
					})}

				{
					this.props.uses.userData.map(item =>
						<div className={s.content}>
							<div className={s.img_and_bt}>
								<img className={s.photo} src={item.picture != null ? item.picture : userIcon} />
								<div>{item.follow
									? <button onClick={() => { this.props.unFollow(item.id) }} className={s.button}>Unfollow</button>
									: <button onClick={() => { this.props.follow(item.id) }} className={s.button}>Follow</button>}
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
				< button className={u.button} > Show more</ button>
			</div >

		)


	}
}

export default Users;