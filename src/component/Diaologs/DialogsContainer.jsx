
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addCreactorMessage, addCreactorTextMessage } from '../../redux/dialogdsPageReduser';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
	return {
		data: state.dialogsPage
	}
}


export default compose(
	connect(mapStateToProps, {
		newMessagess: addCreactorMessage, tet: addCreactorTextMessage
	}),
	withAuthRedirect)(Dialogs);
