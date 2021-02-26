import s from './ProfileInfo.module.css';
import React, { ChangeEvent, useState } from 'react';

type PropsType = {
	status: string
	updateStatusTh: (status: string) => void

}
const ProfileStatusWithHook: React.FC<PropsType> = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status)

	const activeEditMode = () => {
		setEditMode(true);
	}
	const diactiveEditMode = () => {
		setEditMode(false);
		props.updateStatusTh(status);
	}

	const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStatus(e.currentTarget.value);
	}

	return <div className={s.status}>
		{!editMode &&
			<div>
				<span onDoubleClick={activeEditMode} >{'Status: ' + props.status}</span>
			</div >
		}
		{editMode &&
			<div>
				<input onChange={onStatusChange} onBlur={diactiveEditMode} autoFocus={true} placeholder={'edit'} />
			</div >
		}

	</div >
}



export default ProfileStatusWithHook;