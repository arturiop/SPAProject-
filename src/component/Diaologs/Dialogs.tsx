import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Messages from './Messages/Messages';
import React from 'react';
import { Form, Formik, Field } from 'formik';
import { DialogType, MessageType, addCreactorMessage } from '../../redux/dialogdsPageReduser';
import { AppStateType } from '../../redux/reduxStore';
import { useDispatch, useSelector } from 'react-redux';


const Dialogs: React.FC = () => {

	const dispatch = useDispatch()
	const dialogsData = useSelector((state: AppStateType) => state.dialogsPage.dialogsData)
	const messagesData = useSelector((state: AppStateType) => state.dialogsPage.messagesData)
	const newMessagess = (str: string) => dispatch(addCreactorMessage(str))
	let dialogElements = dialogsData
		.map((dialog: DialogType) => <DialogItem key={dialog.id} dialog={dialog} />);

	let messagesElements = messagesData
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