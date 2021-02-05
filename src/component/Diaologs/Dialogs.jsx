import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import React from 'react';


const Dialogs = (props) => {
	let dialogElements = props.data.dialogsData
		.map(dialog => <DialogItem dialog={dialog} />);

	let messagesElements = props.data.messagesData
		.map(message => <Messages message={message} />);

	let l = React.createRef();
	let newMessagess = () => {

		props.dispatch({ type: 'ADD-MESSAGE' });
	}

	let tet = () => {
		let t = l.current.value;
		props.dispatch({ type: 'NEW-TEXT-MESSAGE', str: t });
	};

	return (

		<div className={s.dialogs}>
			<div className={s.dialogItem}>
				{dialogElements}
			</div>
			<div className={s.message}>
				{messagesElements}

				<div className={s.forSends}>
					<textarea value={props.data.newTet} onChange={tet} ref={l} />
					<button onClick={newMessagess}>Send</button>
				</div>
			</div>

		</div>
	);
}
export default Dialogs;