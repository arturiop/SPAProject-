import Header from './Header';
import React from 'react';
import { singOutTh } from '../../redux/authReduser';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component {

	render() {
		return (
			<Header {...this.props} />
		);
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		uID: state.auth.userId
	}

};

export default connect(mapStateToProps, { singOutTh })(HeaderContainer);