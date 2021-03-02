import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { Form, Formik, Field } from 'formik';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../../redux/profilePageReduser';
import { AppStateType } from '../../../redux/reduxStore';


type PropsType = {}
type FormType = {
	postText: string
}
export const MyPosts: React.FC<PropsType> = memo(props => {

	const dispatch = useDispatch()
	const addPost = (str: string) => dispatch(action.addCreactorPost(str))
	const postsData = useSelector((state: AppStateType) => state.profilePage.postsData)
	const deletedPost = (id: number) => dispatch(action.deletedPost(id))

	let postsElements = postsData.map(item =>
		<Post key={item.id} post={item} deletedPost={deletedPost} />);
	const initialValues: FormType = {
		postText: '',
	}

	return (

		<div className={s.postsBlock}>
			My post
			<Formik
				initialValues={initialValues}

				onSubmit={(value, { resetForm }) => {
					addPost(value.postText);
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

