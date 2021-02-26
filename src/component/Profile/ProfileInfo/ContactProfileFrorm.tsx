import { Formik, Form, Field } from 'formik';
import s from './ProfileInfo.module.css';
import * as Yup from "yup";
import { ContactsType, ProfileType } from '../../../commonType/commonType';

type PropsType = {
	pf: ProfileType
	editProfileData: (obj: InitialVFormik) => void
}
export type InitialVFormik = {
	fullName: string
	lookingForAJobDescription: string
	aboutMe: string
	contacts?: ContactsType
}
const ContactProfileFrorm: React.FC<PropsType> = ({ pf, editProfileData }) => {
	const validSchem = Yup.object().shape({
		fullName: Yup.string().min(5).required("invalid")
	})
	const InitialValues: InitialVFormik = {
		fullName: pf.fullName,
		lookingForAJobDescription: pf.lookingForAJobDescription,
		aboutMe: pf.aboutMe,
	}
	return (
		<div className={s.containerContacts}>
			<Formik
				initialValues={InitialValues}
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
							<div><b>Contacts</b>: {Object.keys(pf.contacts).map((key: any) => {
								return <div key={key}>
									<b>{key}</b>: <input name={'contacts.' + key} onChange={props.handleChange} />
								</div>
							})}
							</div>
						</div>

						<div><button type={'submit'} disabled={!props.isValid}>Save</button></div>
					</Form>
				)
				}


			</Formik >
		</div >
	)
}


export default ContactProfileFrorm;