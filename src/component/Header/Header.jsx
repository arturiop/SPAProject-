import s from './Header.module.css';

const Header = () => {
	return (
		<header className={`${s.header} ${s.active}`}>
			<img className={s.img} src='https://pngimg.com/uploads/nike/nike_PNG8.png' />

		</header>
	);
}
export default Header;