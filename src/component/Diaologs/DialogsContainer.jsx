
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addCreactorMessage } from '../../redux/dialogdsPageReduser';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
	return {
		data: state.dialogsPage
	}
}

export default compose(withAuthRedirect,
	connect(mapStateToProps, {
		newMessagess: addCreactorMessage
	}))(Dialogs);
