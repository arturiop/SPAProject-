import { connect } from 'react-redux';
import Friend from './Friend/Friend';
import Friends from './Friends';

let f1 = (state) => {
	return {
		friends: state.friends
	}

}
let f2 = (dispatch) => {
	return {};
}
const FriendsContainer = connect(f1, f2)(Friends);

export default FriendsContainer;