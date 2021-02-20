import s from './Footer.module.css';

const Footer = () => {
	return (
		<div className={s.allPage}>
			<div className={s.divone}>
				<button className={s.xbutton}>
					X
				</button>
			</div>
			<div>
				<button className={s.obutton}>
				ggg
				</button></div>
			<div >
				<button className={s.thbutton}>
					/\
				</button>
			</div>
			<div className={s.kvadrat}>
				<button className={s.cbutton}>
					| |
				</button>
			</div>
		</div >
	);
}

export default Footer;