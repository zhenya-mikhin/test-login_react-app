import React, { useState } from 'react'
import { connect } from 'react-redux'

import s from './Home.module.scss'

interface Props {
  logIn: Function,
  error: string
}

const Home = (props: Props) => {
	return (
		<form className={s.login_form}>
      <div className={s.login_form__wrapper}>
        <label className={s.login_form__label}>Login</label>
        <input className={s.login_form__input} required type='text' name='login' />
      </div>
      <div className={s.login_form__wrapper}>
        <label className={s.login_form__label}>Password</label>
        <input className={s.login_form__input} required type='password' name='password' />
      </div>
      <button className={s.login_form__btn} type='submit'>Sign In</button>
    </form>
	)
}

const mapStateToProps = (state: any) => ({
  error: state.errorMessage
})

const mapDispatchToProps = (dispatch: Function) => ({
  logIn: (login: string, password: string) => dispatch({ type: 'LOG_IN', payload: { login, password}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
