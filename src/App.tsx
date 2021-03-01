import './App.css';
import Navbar from './component/Navbar/Navbar';
import { HashRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import News from './component/News/News';
import FriendsContainer from './component/Friends/FriendsContainer';
import { UsersPage } from './component/Users/UsersPage';
import HeaderContainer from './component/Header/HeaderContainer';
import { LoginPage } from './component/login/Login';
import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReduser';
import { compose } from 'redux';
import Preloader from './component/common/Preloader/Preloader';
import store, { AppStateType } from "./redux/reduxStore";
const DialogsContainer = React.lazy(() => import('./component/Diaologs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfileContainer'));

class App extends React.Component<any> {
	catchAllerrors = (e: PromiseRejectionEvent) => {
		alert("errors"); // вызываем не алерт а санку(нужно сделать ) и там дисппат сделать изменить стейт вывести текст где то как с капей и как то убирать 
	}
	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllerrors)
	}

	render() {
		if (!this.props.init) {
			return <Preloader />
		}

		return <div className='app-wraper' >
			<HeaderContainer />
			< Navbar />
			<div className='app-wraper-content' >
				<Switch>
					<Route exact path='/' render={() => {
						return <Redirect to={'/profile'} />
					}
					} />
					< Route path='/profile/:userId?' render={() => {
						return <Suspense fallback={
							<div>loading...</div>}>
							< ProfileContainer />
						</Suspense>
					}
					} />
					< Route path='/friends' render={() => <FriendsContainer />} />
					<Route path='/dialogs' render={() => {
						return <Suspense fallback={<div>loading...</div>}>
							< DialogsContainer />
						</Suspense>
					}
					} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/find/users' render={() => <UsersPage title={'users'} />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/login' render={() => <LoginPage />} />
				</Switch>

			</div>
		</div>
	}
}

let mapStateToProps = (state: AppStateType) => {
	return {
		init: state.app.initialized
	}
}

let AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp: React.FC = () => {
	return (
		<HashRouter>
			<Provider store={store} >
				<AppContainer />
			</Provider>
		</HashRouter>
	)
}
export default MainApp;
