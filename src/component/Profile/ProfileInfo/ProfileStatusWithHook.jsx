import s from './ProfileInfo.module.css';
import React, { useState } from 'react';

const ProfileStatusWithHook = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status)

	const activeEditMode = () => {
		setEditMode(true);
	}
	const diactiveEditMode = () => {
		setEditMode(false);
		props.updateStatusTh(status);
	}

	const onStatusChange = (e) => {
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