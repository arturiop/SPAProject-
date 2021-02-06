
import { connect } from 'react-redux';
import { addCreactorPost, addCreactorTextPost } from '../../../redux/profilePageReduser';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		post: state.profilePage,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addCreactorPost());
		},
		changeT: (t) => {
			dispatch(addCreactorTextPost(t));
		}
	}

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;