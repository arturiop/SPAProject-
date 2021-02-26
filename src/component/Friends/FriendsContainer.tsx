import { connect } from 'react-redux';
import { FriendsType } from '../../redux/friendsPageReduser';
import { AppStateType } from '../../redux/reduxStore';
import Friends from './Friends';

type MapStateProps = {
	friendsData: Array<FriendsType>
}

let mapStateToProps = (state: AppStateType): MapStateProps => {
	return {
		friendsData: state.friends.friendsData
	}

}

export default connect<MapStateProps, {}, {}, AppStateType>(mapStateToProps, {})(Friends);

