import React from 'react'

import s from './Profile.module.scss'

interface Props {

}

const Profile = (props: Props) => {
	return (
		<div className={s.profile}>
			<h1 className={s.title}>Profile</h1>
		</div>
	)
}

export default Profile
