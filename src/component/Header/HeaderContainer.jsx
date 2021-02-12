import Header from './Header';
import React from 'react';
import { autoraithTh } from '../../redux/authReduser';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.autoraithTh();

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

export default connect(mapStateToProps, { autoraithTh })(HeaderContainer);