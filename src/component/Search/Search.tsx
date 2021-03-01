import { Field, Form, Formik } from "formik"
import { FilterType } from "../Users/UsersPage"


type initValuesType = {
	term: string,
	friend: 'true' | 'false' | 'null'
}
const initValues: initValuesType = {
	term: '',
	friend: 'null'
}
type PropsType = {
	searchUsers: (filter: FilterType) => void
}

const Search: React.FC<PropsType> = (props) => {

	const onsubmit = (values: initValuesType) => {
		const filter: FilterType = {
			term: values.term,
			friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
		}
		props.searchUsers(filter)
	}
	return <div>
		<Formik
			initialValues={initValues}
			onSubmit={(values: initValuesType) => {
				onsubmit(values)
			}}
		>{props => {
			return <Form>
				<Field name={'term'} />
				<Field name="friend" as="select">
					<option value="null">All</option>
					<option value="true">Friends</option>
					<option value="false">Unfollow</option>
				</Field>

				<button type={'submit'} >Search</button>
			</Form>
		}}
		</Formik>
	</div>
}

export default Search