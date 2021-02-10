import preloader from '../../img/ajax-loader.gif';
import s from './Preloader.module.css';

let Preloader = () => {
	return (
		<div>
			<div className={s.lds_roller}> <div> </div>  <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
		</div >
	);
}
export default Preloader;