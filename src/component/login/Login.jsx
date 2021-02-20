import s from './Login.module.css';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { loginTh } from '../../redux/authReduser';
import { Redirect } from 'react-router-dom';

const validationsSchema = yup.object().shape({
	login: yup.string().email('write correct email').typeError('shouдd be string').required('Обязательно'),
	password: yup.string().min(6, 'your password so few').typeError('shouдd be string').required('Required'),
})

export const LoginForm = (props) => {

	return (
		<div className={s.container} >
			<Formik
				initialValues={{
					login: '',
					password: ''
				}}
				validateOnBlur

				onSubmit={(values, { resetForm }) => {
					props.onSubmit(values);
					resetForm({ values: '' });
				}}

				validationSchema={validationsSchema}
			>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => {
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
							<button
								disabled={!isValid || !dirty}
								onClick={handleSubmit}
								type={'submit'}
							>Send</button>
						</Form>
					)
				}
				}
			</Formik>
		</div >
	)
}




class Login extends React.Component {

	loginization = (data) => {
		this.props.login(data)
		return <Redirect to='/profile' />
	}



	render() {
		return (
			<div>
				<h1>LOGIN</h1>
				<LoginForm onSubmit={this.loginization} />
			</div>
		)
	}

}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}


export default connect(mapStateToProps, { login: loginTh })(Login);

