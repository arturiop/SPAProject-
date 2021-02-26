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

type PropsType = MapStatePropsType;

export const withAuthRedirect = (Component: any) => {
	class RedirectComponent extends React.Component<PropsType> {
		render() {
			if (!this.props.isAuth) return <Redirect to='/login' />

			return <Component {...this.props} />
		}
	}

	let ConnectRedirectCommponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

	return ConnectRedirectCommponent;
}