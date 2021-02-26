import s from './PageGenerator.module.css';


type Props = {
	pageTotal: number
	pageCount: number
	currentPage: number
	onChangeNumb: (item: number) => void
}
const PageGenerator: React.FC<Props> = ({ pageTotal, pageCount, currentPage, onChangeNumb }): any => {



	let pageArray: Array<number> = [];
	for (let i = 1; i <= Math.ceil(pageTotal / pageCount); i++) {
		pageArray.push(i);
	}

	return (
		pageArray.map(item => {
			if ((item >= (currentPage - 2)) && (item <= (currentPage + 2))) {
				return (<span key={item} onClick={e => { onChangeNumb(item) }} className={currentPage === item ? s.thisPage : ""}>
					{` ${item}`}</span>);
			} else if (pageArray.length === item) {
				return (<span key={item} onClick={e => { onChangeNumb(item) }} className={currentPage === item ? s.thisPage : ""}>
					{` ...${item}`}</span>);
			}
		})
	);
}
export default PageGenerator;
