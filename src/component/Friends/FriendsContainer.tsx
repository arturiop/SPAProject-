import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import Friend from './Friend/Friend';
import s from './Friends.module.css'
import { UserDataType } from '../../commonType/commonType';
import { getFriendsTh } from '../../redux/friendsPageReduser';
import { Component } from 'react';


type MapStatePropsType = {
	friendsData: Array<UserDataType>
}
type MapDispatchPropsType = {
	getFriendsTh: () => void
}
type PropsType = MapDispatchPropsType & MapStatePropsType

const Friends: React.FC<MapStatePropsType> = ({ friendsData }) => {
	let friend = friendsData.map((friend) => <Friend key={friend.id} item={friend} />)
	return (
		<div className={s.friends}>
			{friend}
		</div >
	);
}

class FriendsComp extends Component<PropsType> {
	componentDidMount() {
		this.props.getFriendsTh()
	}
	render() {
		return <div className={s.classFleks}>
			<Friends friendsData={this.props.friendsData} />
		</div>
	}
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		friendsData: state.friends.friendsData
	}
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(
	mapStateToProps, { getFriendsTh })(FriendsComp);

