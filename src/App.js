import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import News from './component/News/News';
import DialogsContainer from './component/Diaologs/DialogsContainer';
import FriendsContainer from './component/Friends/FriendsContainer';
import UsersContainer from './component/Users/UserContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContainer from './component/Header/HeaderContainer';



const App = (props) => {

	return (

		<div className='app-wraper'>
			<HeaderContainer />
			<Navbar />
			<div className='app-wraper-content'>
				<Route path='/profile/:userId?' render={() => <ProfileContainer />} />
				<Route path='/friends' render={() => <FriendsContainer />} />
				<Route path='/dialogs' render={() => <DialogsContainer />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/find/users' render={() => <UsersContainer />} />
				<Route path='/settings' render={() => <Settings />} />

			</div>

		</div >

	);
}

export default App;
