import 'antd/dist/antd.css';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter }
	from 'react-router-dom';
import Music from './component/Music/Music';
import Settings from './component/Settings/Settings';
import News from './component/News/News';
import { Friends } from './component/Friends/FriendsContainer';
import { UsersPage } from './component/Users/UsersPage';
import { LoginPage } from './component/login/Login';
import React, { Suspense, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { initializeApp } from './redux/appReduser';
import { compose } from 'redux';
import Preloader from './component/common/Preloader/Preloader';
import store, { AppStateType } from "./redux/reduxStore";
import { Button, Layout } from 'antd';
import { HeaderCompont } from './component/Header/HeaderCompont';
import { singOutTh } from './redux/authReduser';


const { Header, Content, Footer, Sider } = Layout;
const Dialogs = React.lazy(() => import('./component/Diaologs/Dialogs'));
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfContainer'));
const ChatPages = React.lazy(() => import('./component/pages/ChatPages'));

const App: React.FC = () => {
	const tailLayout = {
		wrapperCol: { offset: 13, span: 6 },
	};
	const init = useSelector((state: AppStateType) => state.app.initialized)
	const dispatch = useDispatch()
	const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
	const singOut = (() => dispatch(singOutTh()))

	const catchAllerrors = (e: PromiseRejectionEvent) => {
		alert("errors"); // вызываем не алерт а санку(нужно сделать ) и там дисппат сделать изменить стейт вывести текст где то как с капей и как то убирать 
	}
	useEffect(() => {

		dispatch(initializeApp())
		window.addEventListener("unhandledrejection", catchAllerrors)
	}, [])

	if (!init) return <Preloader />

	return (
		<Layout>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={broken => {

				}}
				onCollapse={(collapsed, type) => {

				}}
			>
				<div className="logo" />
				<Navbar />
				{isAuth && <Button {...tailLayout} type='primary' onClick={singOut}>Logout</Button>}

			</Sider>
			<Layout>
				<Header className="site-layout-sub-header-background"
					style={{ padding: 0, minHeight: 80 }} >
					<HeaderCompont />
				</Header>
				<Content style={{ margin: '24px 16px 0' }}>
					<div className="site-layout-background" style={{ padding: 15, minHeight: 360 }}>
						<Switch>
							<Route exact path='/' render={() => {
								return <Redirect to={'/profile'} />
							}
							} />
							< Route path='/profile/:userId?' render={() => {
								return <Suspense fallback={
									<div>loading...</div>}>
									<ProfileContainer />
								</Suspense>
							}
							} />
							< Route path='/friends' render={() => <Friends />} />
							<Route path='/dialogs' render={() => {
								return <Suspense fallback={<div>loading...</div>}>
									<Dialogs />
								</Suspense>
							}
							} />
							< Route path='/chat' render={() => {
								return <Suspense fallback={
									<div>loading...</div>}>
									<ChatPages />
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
				</Content>
				<Footer style={{ textAlign: 'center' }}>Design  by Artur Piloyan</Footer>
			</Layout>
		</Layout >
	)

}


let AppContainer = compose<React.ComponentType>(withRouter)(App);

const MainApp: React.FC = () => {
	return (
		<BrowserRouter>
			<Provider store={store} >
				<AppContainer />
			</Provider>
		</BrowserRouter>
	)
}
export default MainApp;





