import { MessageType } from '../../../redux/dialogdsPageReduser';
import s from './Messages.module.css';

type PropsType = {
	message: MessageType
}
const Messages: React.FC<PropsType> = ({ message }) => {

	return (
		<div className={s.message}>
			{message.value}
		</div>
	);
}
export default Messages;