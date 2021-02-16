import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import React from 'react';
import { Form, Formik, Field } from 'formik';




const Dialogs = (props) => {
	let dialogElements = props.data.dialogsData
		.map(dialog => <DialogItem dialog={dialog} />);

	let messagesElements = props.data.messagesData
		.map(message => <Messages message={message} />);


	return (

		<div className={s.dialogs}>
			<div className={s.dialogItem}>
				{dialogElements}
			</div>
			<div className={s.message}>
				{messagesElements}

				<Formik
					initialValues={{
						message: '',
					}}
					onSubmit={(value, { resetForm }) => {
						props.newMessagess(value.message);
						resetForm({ value: '' })
					}}
				>
					{(props) => (
						<Form>
							<Field name={'message'} placeholder={'write message'} />
							<button type={'submit'}>Send</button>
						</Form>
					)}
				</Formik>
			</div>

		</div>
	);
}
export default Dialogs;