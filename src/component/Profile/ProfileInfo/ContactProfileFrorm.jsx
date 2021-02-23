import { Formik, Form, Field } from 'formik';
import s from './ProfileInfo.module.css';
import * as Yup from "yup";


const ContactProfileFrorm = ({ pf, editProfileData }) => {
	const validSchem = Yup.object().shape({
		fullName: Yup.string().min(5).required("invalid")
	})
	return (
		<div className={s.containerContacts}>
			<Formik
				initialValues={{
					fullName: pf.fullName,
					lookingForAJobDescription: pf.lookingForAJobDescription,
					aboutMe: pf.aboutMe,
				}}

				validationSchema={validSchem}
				onSubmit={(obj) => {
					editProfileData(obj);
				}} >{(props) => (
					<Form>
						<div className={s.adoutUser}>
							<b>About me: </b><Field name={'aboutMe'} /></div>
						<div>
							<b>Name: </b> <Field name={'fullName'} /></div>
						{props.errors.fullName && props.touched.fullName ? (<div>{props.errors.fullName}</div>) : null}
						<div><b>My jobs possition: </b> <Field name={'lookingForAJobDescription'}
							component={'textarea'} /></div>


						<div className={s.contacts}>
							<div><b>Contacts</b>: {Object.keys(pf.contacts).map(key => {
								return <div>
									<b>{key}</b>: <input name={'contacts.' + key}
										onChange={props.handleChange} initialValues={props.values.contacts[key]} value={pf.contacts[key]} />
								</div>
							})}
							</div>
						</div>

						<div><button disabled={!props.isValid}>Save</button></div>
					</Form>
				)
				}


			</Formik >
		</div >
	)
}


export default ContactProfileFrorm;