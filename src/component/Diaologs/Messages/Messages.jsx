import s from './Messages.module.css';
const Messages = (props) => {

	return (

		<div className={s.message}>

			{props.message.value}

		</div>
	);
}
export default Messages;