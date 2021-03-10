import { message } from "antd"
import { Field, Formik, Form } from "formik"
import { useEffect, useState } from "react"
import image from '../../img/img.webp'


const wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPages: React.FC = () => {
	return (
		<Chat />
	)
}

const Chat: React.FC = () => {
	return <div>
		<ChatMessages />
		<AddMessageForm />
	</div>
}

type ChatMessagesType = {
	message: string
	photo: string
	userId: number
	userName: string
}

const ChatMessages: React.FC = () => {

	const [messages, setMessage] = useState<ChatMessagesType[]>([]) //our LS  

	useEffect(() => {
		wsChanel.addEventListener('open', () => {

		})
	}, [])


	useEffect(() => {
		wsChanel.addEventListener('message', (e: MessageEvent) => { //get message into our LS 
			const newMessage = JSON.parse(e.data)
			setMessage((prevMessage) => [...prevMessage, ...newMessage]) //переписали ф-ю сетМесадж, в него прийдет прошлый месседж логика переобразования LS
		})
	}, [])
	return (
		<div style={{ height: '400px', overflowY: 'auto' }} >
			{ messages.map((m: any, index) => <Message key={index} message={m} />)}
		</div>

	)
}
type MessageType = {
	message: ChatMessagesType
}
const Message: React.FC<MessageType> = ({ message }) => {


	return (
		<div>
			<img width={50} src={message.photo} alt="" />
			{message.userName}
			<div>
				{message.message}
			</div>
			<hr />
		</div>
	)
}

const AddMessageForm: React.FC = () => {
	return (
		<div>
			<Formik
				initialValues={{ body: "" }}
				onSubmit={(values, { resetForm }) => {
					wsChanel.send(values.body)
					resetForm()
				}
				}
			>{() => {
				return <Form>
					<Field name="body" type={'input'} />
					<button type={'submit'}>Send</button>
				</Form>

			}}
			</Formik>
		</div>

	)
}


export default ChatPages;