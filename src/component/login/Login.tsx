import s from './Login.module.css';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { loginTh } from '../../redux/authReduser';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../redux/reduxStore';

const validationsSchema = yup.object().shape({
	login: yup.string().email('write correct email').typeError('shouдd be string').required('Обязательно'),
	password: yup.string().min(6, 'your password so few').typeError('shouдd be string').required('Required'),
})

type PropsType = {
	captcha: string | null
	onSubmit: (values: LogeinType) => void
}
type InitialFormikV = {
	login: string
	password: string
	captcha: string | null,
}
export const LoginForm: React.FC<PropsType> = (props) => {
	const initialValue: InitialFormikV = {
		login: '',
		password: '',
		captcha: null,
	}
	return (
		<div className={s.container} >
			<Formik
				initialValues={initialValue}
				onSubmit={(values, { resetForm }) => {
					props.onSubmit(values)
					resetForm()
				}}
				validationSchema={validationsSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => {

					return (
						<Form>
							<Field
								placeholder={'login'}
								type={'email'}
								className={s.inputForm + "" + s.er}
								name={'login'}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.login}
							/>
							{touched.login && errors.login && <p className={s.er}>{errors.login}</p>}
							<Field
								placeholder={'password'}
								type={'password'}
								className={s.inputForm}
								name={'password'}
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							{touched.password && errors.password && <p className={s.er}>{errors.password}</p>}
							{props.captcha && <Field name={'captcha'} />}
							<button
								disabled={!isValid || !dirty}
								type={'submit'}
							>Send</button>
						</Form>
					)
				}
				}
			</Formik>
			{ props.captcha && <img src={props.captcha} alt="" />}

		</div >
	)
}

export type LogeinType = {
	captcha: string | null
	login: string
	password: string
}

type MapStatePropsType = {
	isAuth: boolean | null
	captcha: string | null
}
type MapDispatchPropsType = {
	login: (data: LogeinType) => void
}
type PropsTypeCC = MapStatePropsType & MapDispatchPropsType;


class Login extends React.Component<PropsTypeCC> {

	loginization = (data: LogeinType) => {
		this.props.login(data);
	}

	render() {
		return (
			<div>
				<h1>LOGIN</h1>
				<LoginForm captcha={this.props.captcha} onSubmit={this.loginization} />
			</div>
		)
	}

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
	return {
		isAuth: state.auth.isAuth,
		captcha: state.auth.captcha
	}
}


export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { login: loginTh, })(Login);

