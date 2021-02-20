import s from './PageGenerator.module.css';

const PageGenerator = (props) => {

	let pageArray = [];
	for (let i = 1; i <= Math.ceil(props.pageTotal / props.pageCount); i++) {
		pageArray.push(i);
	}

	return (
		pageArray.map(item => {
			if ((item >= (props.currentPage - 2)) && (item <= (props.currentPage + 2))) {
				return (<div onClick={e => { props.onChangeNumb(item) }}
					className={props.currentPage === item ? s.thisPage : null}
				>{` ${item}`}</div>);
			} else if (pageArray.length === item) {
				return (<div onClick={e => { props.onChangeNumb(item) }} className={props.currentPage === item ? s.thisPage : null}>
					<a href="">{` ...${item}`}</a></div>);
			}
		})

	);
}
export default PageGenerator;