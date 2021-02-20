
import { connect } from 'react-redux';
import { addCreactorPost, deletedPost } from '../../../redux/profilePageReduser';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		post: state.profilePage,
	}
}

const MyPostsContainer = connect(mapStateToProps, {
	addPost: addCreactorPost, deletedPost: deletedPost
})(MyPosts);

export default MyPostsContainer;