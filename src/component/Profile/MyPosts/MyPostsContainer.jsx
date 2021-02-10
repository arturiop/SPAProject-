
import { connect } from 'react-redux';
import { addCreactorPost, addCreactorTextPost } from '../../../redux/profilePageReduser';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		post: state.profilePage,
	}
}

const MyPostsContainer = connect(mapStateToProps, {
	addPost: addCreactorPost,
	changeT: addCreactorTextPost
})(MyPosts);

export default MyPostsContainer;