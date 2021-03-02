import { Field, Form, Formik } from "formik"
import { useSelector } from "react-redux"
import { getFilter } from "../../redux/userSelect"
import { FilterType } from "../Users/UsersPage"

type FriendFormType = 'true' | 'false' | 'null'
type initValuesType = {
	term: string,
	friend: FriendFormType
}

type PropsType = {
	searchUsers: (filter: FilterType) => void
}


const Search: React.FC<PropsType> = (props) => {
	const filter = useSelector(getFilter)

	const initValues: initValuesType = {
		term: filter.term,
		friend: String(filter.friend) as FriendFormType
	}



	const onsubmit = (values: initValuesType) => {
		const filter: FilterType = {
			term: values.term,
			friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
		}
		props.searchUsers(filter)
	}
	return <div>
		<Formik
			enableReinitialize={true}
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