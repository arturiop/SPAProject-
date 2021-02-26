
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addCreactorMessage, InitialStateTypeDialog } from '../../redux/dialogdsPageReduser';
import { AppStateType } from '../../redux/reduxStore';
import { withAuthRedirect } from '../hoc/withAurhRedirect';
import Dialogs from './Dialogs';

type MapStatePropsType = {
	data: InitialStateTypeDialog
}
type MapDispatchPropsType = {
	newMessagess: (str: string) => void
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		data: state.dialogsPage
	}
}

export default compose(withAuthRedirect,
	connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
		{ newMessagess: addCreactorMessage }))(Dialogs);
