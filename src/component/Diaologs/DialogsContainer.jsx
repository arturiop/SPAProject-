
import { connect } from 'react-redux';
import { addCreactorMessage, addCreactorTextMessage } from '../../redux/dialogdsPageReduser';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
	return {
		data: state.dialogsPage,
	}
}


const DialogsContainer = connect(mapStateToProps, {
	newMessagess: addCreactorMessage,
	tet: addCreactorTextMessage
})(Dialogs);

export default DialogsContainer;