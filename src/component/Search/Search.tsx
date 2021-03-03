import { Button } from "antd"
import { Formik, Form, Field } from "formik"
import { useSelector } from "react-redux"
import { getFilter } from "../../redux/userSelect"
import { FilterType } from "../Users/UsersPage"
import { SearchOutlined } from '@ant-design/icons';




type FriendFormType = 'true' | 'false' | 'null'
type initValuesType = {
	term: string,
	friend: FriendFormType
}

type PropsType = {
	searchUsers: (filter: FilterType) => void
}
const layout = {
	labelCol: { span: 2 },
	wrapperCol: { span: 3 },
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

				{/* <Input style={{ width: '30%' }} name={'term'} />
				<Select showSearch style={{ width: '15%' }}
					placeholder="Search to Select">
					<Option value="null">All Users</Option>
					<Option value="true">Friends</Option>
					<Option value="false">Not signed yet </Option>
				</Select >

				<Input.Group compact>
					<Input style={{ width: '30%' }} name={'term'} />
					<Select showSearch defaultValue="" style={{ width: '15%' }}
						placeholder="Search to Select">
						<Option value="null">All Users</Option>
						<Option value="true">Friends</Option>
						<Option value="false">Not signed yet </Option>
					</Select>
				</Input.Group> */}

				<Field name="term" />
				<Field name="friend" as="select">
					<option value="null">All</option>
					<option value="true">Friends</option>
					<option value="false">Unfollow</option>
				</Field>
				<Button type='link' icon={<SearchOutlined />} htmlType={'submit'}> Search</Button >
			</Form>
		}}
		</Formik>
	</div>
}

export default Search



