import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { Form, Formik, Field } from 'formik';
import { memo } from 'react';
import { PostDataType } from '../../../commonType/commonType';


type PropsType = {
	postsData: Array<PostDataType>
	deletedPost: (id: number) => void
	addPost: (str: string) => void
}
type FormType = {
	postText: string
}
const MyPosts: React.FC<PropsType> = memo(props => {
	let postsElements = props.postsData.map(item =>
		<Post key={item.id} post={item} deletedPost={props.deletedPost} />);

	const initialValues: FormType = {
		postText: '',
	}

	return (

		<div className={s.postsBlock}>
			My post
			<Formik
				initialValues={initialValues}

				onSubmit={(value, { resetForm }) => {
					props.addPost(value.postText);
					resetForm();
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