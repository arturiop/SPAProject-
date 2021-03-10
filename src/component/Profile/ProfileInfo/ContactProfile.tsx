import { memo } from 'react';
import { ProfileType } from '../../../commonType/commonType';
import s from './ProfileInfo.module.css';
type PropsType = {
	pf: ProfileType
	isOwner: boolean
	activeEditMode: () => void
}
const ContactProfile: React.FC<PropsType> = memo(({ pf, isOwner, activeEditMode }) => {

	return (
		<div className={s.containerContacts}>
			<div className={s.containerContacts}>
				<div><b>Name: </b> {pf.fullName}</div>
				<div><b>My jobs possition: </b> {pf.lookingForAJobDescription}</div>
				<div><b>About me: </b>{pf.aboutMe}</div>
			</div>
			<div className={s.contacts}>
				<div><b>Contacts</b>: {
					Object
						.keys(pf.contacts)
						.map(key => {
							return <div key={key} >
								<b>{key}</b>:{pf.contacts[key as any]}
							</div>
						})}
				</div>
			</div>
			{ isOwner && <button type={'submit'} onClick={activeEditMode} >Click me!</button>}
		</div >


	)
})

export default ContactProfile;
