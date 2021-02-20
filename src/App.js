import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, HashRouter, Route, withRouter } from 'react-router-dom';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import News from './component/News/News';
import FriendsContainer from './component/Friends/FriendsContainer';
import UsersContainer from './component/Users/UserContainer';
import HeaderContainer from './component/Header/HeaderContainer';
import Login from './component/login/Login';
import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReduser';
import { compose } from 'redux';
import Preloader from './component/common/Preloader/Preloader';
import store from "./redux/reduxStore";
const DialogsContainer = React.lazy(() => import('./component/Diaologs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfileContainer'));

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.init) {
			return <Preloader />
		}

		return (
			<div className='app-wraper' >
				<HeaderContainer />
				<Navbar />
				<div className='app-wraper-content'>
					<Route path='/profile/:userId?' render={() => {
						return <Suspense fallback={<div>loading...</div>}>
							<ProfileContainer />
						</Suspense>
					}} />
					<Route path='/friends' render={() => <FriendsContainer />} />
					<Route path='/dialogs' render={() => {
						return <Suspense fallback={<div>loading...</div>}>
							<DialogsContainer />
						</Suspense>
					}} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/find/users' render={() => <UsersContainer />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/login' render={() => <Login />} />
				</div>
			</div >
		);
	}
}

let mapStateToProps = (state) => {
	return {
		init: state.app.initialized
	}
}

let AppContainer = compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

let MainApp = () => {
	return (
			<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
			</HashRouter>
	)
}
export default MainApp;
