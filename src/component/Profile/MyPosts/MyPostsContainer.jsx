
import { connect } from 'react-redux';
import { addCreactorPost } from '../../../redux/profilePageReduser';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		post: state.profilePage,
	}
}

const MyPostsContainer = connect(mapStateToProps, {
	addPost: addCreactorPost
})(MyPosts);

export default MyPostsContainer;