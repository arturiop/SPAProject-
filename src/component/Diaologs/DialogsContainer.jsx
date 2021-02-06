
import { connect } from 'react-redux';
import { addCreactorMessage, addCreactorTextMessage } from '../../redux/dialogdsPageReduser';
import Dialogs from './Dialogs';



let toState = (state) => {
	return {
		data: state.dialogsPage,
	}
}

let toDispatch = (dispatch) => {
	return {
		newMessagess: () => {
			dispatch(addCreactorMessage());
		},
		tet: (t) => {
			dispatch(addCreactorTextMessage(t));
		}
	}
}
const DialogsContainer = connect(toState, toDispatch)(Dialogs);

export default DialogsContainer;