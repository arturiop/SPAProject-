import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { Form, Formik, Field } from 'formik';
import { memo } from 'react';



const MyPosts = memo(props => {
	let postsElements = props.post.postsData.map(post =>
		<Post key={post.id} posts={post} deletedPost={props.deletedPost} />);


	return (
		<div className={s.postsBlock}>
			My post
			<Formik
				initialValues={{
					postText: '',
				}}

				onSubmit={(value, { resetForm }) => {
					props.addPost(value.postText);
					resetForm({ value: '' });
				}}
			>
				{(props) => (
					<Form>
						<Field component={'textarea'} name={'postText'} placeholder={'write any one'} />
						<button type='submit'>ADD</button>
					</Form>
				)}
			</Formik>
			{ postsElements}
		</div >
	);
})


export default MyPosts;