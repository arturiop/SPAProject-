import s from './Login.module.css';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { loginTh } from '../../redux/authReduser';
import { AppStateType } from '../../redux/reduxStore';
import { Redirect } from 'react-router-dom';

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

export const LoginPage: React.FC = (props) => {
	const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
	const captcha = useSelector((state: AppStateType) => state.auth.captcha)
	const dispatch = useDispatch()
	const login = ((data: LogeinType) => {
		dispatch(loginTh(data))
	})
	const loginization = (data: LogeinType) => {
		login(data);
	}
	if (isAuth) {
		return <Redirect to={'/profile'} />
	}

	return (
		<div>
			<h1>LOGIN</h1>
			<LoginForm captcha={captcha} onSubmit={loginization} />
		</div>
	)
}
