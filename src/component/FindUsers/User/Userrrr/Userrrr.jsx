import { bindActionCreators } from 'redux';
import s from './Userrrs.module.css';
import userIcon from '../../../../img/images.png';
const Userrr = (props) => {
	let item = props.member;
	let changeF = () => {
		props.f(item.id);
	}
	let changeUF = () => {
		props.uf(item.id);
	}
	return (
		<div className={s.content}>
			<div className={s.img_and_bt}>
				<img className={s.photo} src={item.picture != null ? item.picture : userIcon} />
				<div>
					{item.follow
						? <button onClick={changeUF} className={s.button}>Unfollow</button>
						: <button onClick={changeF} className={s.button}>Follow</button>}
				</div>
			</div>
			<div className={s.data}>
				<div>{item.name}</div>
				<div>{item.country}</div>
				<div>{item.city}</div>
				<span>{item.quote}</span>
			</div>
		</div >
	);
}
export default Userrr;