import s from './Preloader.module.css';

let Preloader: React.FC = () => {
	return (
		<div className={s.wrap}>
			<div className={s.lds_roller}> <div> </div>  <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
		</div >
	);
}
export default Preloader;