
import u from './Users.module.css';
import Userrr from './Userrrr/Userrrr';
import * as axios from 'axios';

const Users = (props) => {
	if (props.uses.userData.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

			props.setUsers(response.data.items);
		})
		// let user = [
		// 	{ id: 1, follow: true, name: 'Artur', country: 'Ukraine', city: 'Kharkov', quote: 'I`am super men', picture: "https://www.seekpng.com/png/small/297-2971641_image-star-wars-inquisitor-logo-png.png" },
		// 	{ id: 2, follow: true, name: 'Arturio', country: 'Russia', city: 'Moscow', quote: 'I`am super men', picture: "https://www.seekpng.com/png/small/297-2971641_image-star-wars-inquisitor-logo-png.png" },
		// 	{ id: 3, follow: false, name: 'Sergio', country: 'Ukraine', city: 'Kharkov', quote: 'I`am super men', picture: "https://www.seekpng.com/png/small/297-2971641_image-star-wars-inquisitor-logo-png.png" },
		// ];
	}

	let userElement = props.uses.userData.map((member) => <Userrr f={props.follow} uf={props.unFollow} member={member} />);


	return (
		<div className={u.user}>
			<div className={u.oneUser}>
				{userElement}
			</div>

			<button className={u.button}>Show more</button>
		</div>
	);
}
export default Users;