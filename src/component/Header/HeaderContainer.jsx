import Header from './Header';
import React from 'react';
import { setUserData } from '../../redux/authReduser';
import { connect } from 'react-redux';
import { commonAPI } from '../../redux/api/api';


class HeaderContainer extends React.Component {

	componentDidMount() {
		commonAPI.autoraithe()
			.then(data => {
				if (data.resultCode === 0) {
					let { id, email, login } = data.data;
					this.props.setUserData(id, email, login)
				};
			})

	}

	render() {
		return (
			<Header {...this.props} />
		);
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}

};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);