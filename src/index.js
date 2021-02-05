
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state";


let rerenderPage = (state) => {
	ReactDOM.render(
		<App state={state} newPost={store.newPost.bind(store)}
			newTeForPost={store.newTeForPost.bind(store)}
			newTet={store.newTet.bind(store)}
			newMessage={store.newMessage.bind(store)} />,
		document.getElementById('root')
	);
}

rerenderPage(store.getState());

store.subscribe(rerenderPage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
