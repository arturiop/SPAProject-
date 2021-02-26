import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import React from 'react';
import { Form, Formik, Field } from 'formik';
import { DialogType, MessageType, InitialStateTypeDialog } from '../../redux/dialogdsPageReduser';

type PropsType = {
	data: InitialStateTypeDialog
	newMessagess: (str: string) => void
}
const Dialogs: React.FC<PropsType> = ({ data, newMessagess }) => {
	let dialogElements = data.dialogsData
		.map((dialog: DialogType) => <DialogItem key={dialog.id} dialog={dialog} />);

	let messagesElements = data.messagesData
		.map((message: MessageType) => <Messages key={message.id} message={message} />);

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
						newMessagess(value.message);
						resetForm()
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