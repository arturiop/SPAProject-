import { memo } from 'react';
import s from './Post.module.css';
import imgFor from '../../../../img/img.webp'
import { PostDataType } from '../../../../commonType/commonType';

type PropsType = {
	post: PostDataType
	deletedPost: (id: number) => void
}

const Post: React.FC<PropsType> = memo(({ post, deletedPost }) => {

	const ii = new Date().toLocaleTimeString();
	let response = "abubandit";

	return (

		<div>
			<div>{response}</div>
			<img className={s.img} alt='' src={imgFor} />
			<span>{`${post.name} `}</span>
			<span>hi {ii}</span>
			<div>
				<span>{post.value}</span>
				<span>{post.count} like</span>
			</div>
			<button onClick={() => deletedPost(post.id)}>Remove</button>

		</div>
	);
})

export default Post;