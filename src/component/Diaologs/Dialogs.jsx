import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import React from 'react';
import { Redirect } from 'react-router-dom';



const Dialogs = (props) => {
	let dialogElements = props.data.dialogsData
		.map(dialog => <DialogItem dialog={dialog} />);

	let messagesElements = props.data.messagesData
		.map(message => <Messages message={message} />);

	let newMessagess = () => {
		props.newMessagess();
	}

	let tet = (event) => {
		let t = event.target.value;
		props.tet(t);
	};

	if (!props.isAuth) {
		return <Redirect to='/login' />
	}

	return (

		<div className={s.dialogs}>
			<div className={s.dialogItem}>
				{dialogElements}
			</div>
			<div className={s.message}>
				{messagesElements}

				<div className={s.forSends}>
					<textarea value={props.data.newTet} onChange={tet} placeholder='Enter text' />
					<button onClick={newMessagess}>Send</button>
				</div>
			</div>

		</div>
	);
}
export default Dialogs;