import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/reduxStore";


type MapStatePropsType = {
	isAuth: boolean | null
}
let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
	return {
		isAuth: state.auth.isAuth
	}
};

export const withAuthRedirect = (Component: React.ComponentType) => {
	class RedirectComponent extends React.Component<MapStatePropsType> {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login' />

			return <Component {...this.props} />
		}
	}

	let ConnectRedirectCommponent = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);

	return ConnectRedirectCommponent;
}