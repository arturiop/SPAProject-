import s from './MyPosts.module.css';
import Post from './Posts/Post';
import React from 'react';


const MyPosts = (props) => {

	let postsElements = props.post.postsData.map(post => <Post posts={post} />);

	let postT = React.createRef();
	let addPost = () => {
		props.addPost();
	}

	let changeT = () => {
		let t = postT.current.value;
		props.changeT(t);
	}

	return (
		<div className={s.postsBlock}>
			My post
			<div>
				<div>
					<textarea onChange={changeT} value={props.post.newPostT} ref={postT} />
				</div>
				<div>
					<button onClick={addPost}>Add</button>
				</div>
			</div>
			<div className={s.post}>
				{postsElements}
			</div>
		</div >

	);
}
export default MyPosts;