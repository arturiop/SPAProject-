import s from './ProfileInfo.module.css';

const ContactProfile = ({ pf, isOwner, activeEditMode }) => {
	return (
		<div className={s.containerContacts}>
			<div className={s.containerContacts}>
				<div><b>Name: </b> {pf.fullName}</div>
				<div><b>My jobs possition: </b> {pf.lookingForAJobDescription}</div>
				<div><b>About me: </b>{pf.aboutMe}</div>
			</div>
			<div className={s.contacts}>
				<div><b>Contacts</b>: {Object.keys(pf.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={pf.contacts[key]} />
				})}    </div>
			</div>
			{isOwner && <button onClick={activeEditMode} >Click me!</button>}
		</div>


	)
}

const Contact = ({ contactTitle, contactValue }) => {
	return <div><b>{contactTitle}</b>:{contactValue || ' empty'} </div>
}

export default ContactProfile;