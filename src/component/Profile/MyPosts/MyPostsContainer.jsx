
import React from 'react';
import StoreCont from '../../../ContComponent';
import { addCreactorPost, addCreactorTextPost } from '../../../redux/profilePageReduser';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	return (
		<StoreCont.Consumer>
			{(store) => {
				let state = store.getState().profilePage;

				let addPost = () => {
					store.dispatch(addCreactorPost());
				}

				let changeT = (t) => {
					store.dispatch(addCreactorTextPost(t));
				}
				return (<MyPosts changeT={changeT} addPost={addPost} post={state} />);
			}
			}
		</StoreCont.Consumer>
	);
}
export default MyPostsContainer;