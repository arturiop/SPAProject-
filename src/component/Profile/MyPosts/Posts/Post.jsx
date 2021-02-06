import s from './Post.module.css';

const Post = (props) => {

	let response = "abubandit";

	const ii = new Date().toLocaleTimeString();

	return (

		<div>
			<div>{response}</div>
			<img className={s.img} src="https://cdn4.iconfinder.com/data/icons/men-avatars-set-2-dot-version/380/13-512.png" />
			<span>{`${props.posts.name} `}</span>
			<span>hi {ii}</span>
			<div>
				<span>{props.posts.value}</span>
				<span>{props.posts.count} like</span>
			</div>

		</div>
	);
}
export default Post;