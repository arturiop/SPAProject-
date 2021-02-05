
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/reduxStore";


let rerenderPage = (state) => {
	ReactDOM.render(
		<App state={state} dispatch={store.dispatch.bind(store)} />,
		document.getElementById('root')
	);
}

rerenderPage(store.getState());

store.subscribe(rerenderPage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
