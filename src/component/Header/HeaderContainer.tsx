import Header from './Header';
import React from 'react';
import { singOutTh } from '../../redux/authReduser';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';

type MapStatePropsType = {
	isAuth: boolean | null
	login: string | null
	uID: number | null
}
type MapDispatchPropsType = {
	singOutTh: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType;
class HeaderContainer extends React.Component<PropsType> {

	render() {
		return (
			<Header isAuth={this.props.isAuth}
				login={this.props.login}
				singOutTh={this.props.singOutTh} />
		);
	}
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		uID: state.auth.userId
	}

};

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { singOutTh })(HeaderContainer);