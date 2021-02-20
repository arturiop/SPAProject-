import s from './ProfileInfo.module.css';
import React from 'react';

class ProfileStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status
	}
	activeEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactiveEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatusTh(this.state.status)
	}
	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				state: this.props.status
			})
		}

	}

	render() {

		return <div className={s.status}>
			{!this.state.editMode &&
				<div>
					<span onDoubleClick={this.activeEditMode} >{this.props.status || 'no status'}</span>
				</div>
			}
			{this.state.editMode &&
				<div>
					<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode}
						value={this.state.status} />
				</div>
			}
		</div >
	}


}
export default ProfileStatus;