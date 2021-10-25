import React from 'react'
import { connect } from 'react-redux'
import { SIGN_OUT } from '../../store/actionTypes'
import { Redirect } from 'react-router-dom'

import s from './Profile.module.scss'

interface Props {
  login: string,
  isAuthorized: boolean,
  signOut: Function
}

const Profile = (props: Props) => {
  const { login, isAuthorized } = props

  const signOut = () => {
    props.signOut()
  }

  if (!isAuthorized) {
    return <Redirect to='/' />
  }

	return (
		<div className={s.profile}>
			<h1 className={s.title}>{ login }</h1>

      <button className={s.sign_out} onClick={signOut}>sign out</button>
		</div>
	)
}

const mapStateToProps = (state: any) => ({
  isAuthorized: Boolean(state.login),
  login: state.login
})

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch({ type: SIGN_OUT })
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
