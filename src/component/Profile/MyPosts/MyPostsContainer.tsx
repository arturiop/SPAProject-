
import { connect } from 'react-redux';
import { PostDataType, UserDataType } from '../../../commonType/commonType';
import { action } from '../../../redux/profilePageReduser';

import { AppStateType } from '../../../redux/reduxStore';
import MyPosts from './MyPosts';

type MapDispatchPropsType = {
	addPost: (str: string) => void
	deletedPost: (id: number) => void
}
type MapStatePropsType = {
	postsData: Array<PostDataType>
}
type OwnPropsType = {
	title?: string
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		postsData: state.profilePage.postsData,
	}
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
	addPost: action.addCreactorPost, deletedPost: action.deletedPost
})(MyPosts);

export default MyPostsContainer;