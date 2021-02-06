import React from 'react';
import StoreCont from '../../ContComponent';
import { addCreactorMessage, addCreactorTextMessage } from '../../redux/dialogdsPageReduser';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
	return (
		<StoreCont.Consumer>
			{ (store) => {
				let state = store.getState().dialogsPage;
				let newMessagess = () => {
					store.dispatch(addCreactorMessage());
				}

				let tet = (t) => {
					store.dispatch(addCreactorTextMessage(t));
				};
				return <Dialogs newMessagess={newMessagess} tet={tet} data={state} />
			}
			}
		</StoreCont.Consumer>
	);
}
export default DialogsContainer;