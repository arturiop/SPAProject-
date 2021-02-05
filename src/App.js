import './App.css';
import Profile from './component/Profile/Profile.jsx';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Dialogs from './component/Diaologs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import News from './component/News/News';
import Friends from './component/Friends/Friends';






const App = (props) => {

	return (

		<div className='app-wraper'>
			<Header />
			<Navbar />
			<div className='app-wraper-content'>
				<Route path='/profile' render={() => <Profile data={props.state.profilePage}
					dispatch={props.dispatch} />} />
				<Route path='/friends' render={() => <Friends data={props.state.friendsPage} />} />
				<Route path='/dialogs' render={() => <Dialogs data={props.state.dialogsPage}
					dispatch={props.dispatch} />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/news' render={() => <News />} />
				<Route path='/settings' render={() => <Settings />} />

			</div>

		</div >

	);
}

export default App;
