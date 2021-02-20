

import { memo } from 'react';
import s from './Post.module.css';


const Post = memo(props => {

	const ii = new Date().toLocaleTimeString();
	let response = "abubandit";

	return (

		<div>
			<div>{response}</div>
			<img className={s.img} alt='' src="https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" />
			<span>{`${props.posts.name} `}</span>
			<span>hi {ii}</span>
			<div>
				<span>{props.posts.value}</span>
				<span>{props.posts.count} like</span>
			</div>
			<button onClick={() => props.deletedPost(props.posts.id)}>Remove</button>

		</div>
	);
})

export default Post;