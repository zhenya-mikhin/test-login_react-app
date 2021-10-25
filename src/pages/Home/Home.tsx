import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import s from './Home.module.scss'

interface Props {
  logIn: Function,
  error: boolean,
  isAuthorized: boolean,
  login: string,
  password: string
}

const Home = (props: Props) => {
  const [ login, setlogin ] = useState('')
  const [ password, setPassword ] = useState('')
  const { isAuthorized, error } = props

  const handleChangeLogin = (evt: any) => {
    const { target: { value } } = evt
    setlogin(value)
  }

  const handleChangePassword = (evt: any) => {
    const { target: { value } } = evt
    setPassword(value)
  }

  const handleSubmit = (evt: any) => {
    evt.preventDefault()

    props.logIn(login, password)
  }

  if (isAuthorized) {
    return <Redirect to='/profile' />
  }

	return (
		<form className={s.login_form} onSubmit={handleSubmit}>
      <div className={s.login_form__wrapper}>
        <label className={s.login_form__label}>логин</label>
        <input
          className={s.login_form__input}
          required
          type='text'
          name='login'
          onChange={handleChangeLogin} />
      </div>
      <div className={s.login_form__wrapper}>
        <label className={s.login_form__label}>пароль</label>
        <input
          className={s.login_form__input}
          required type='password'
          name='password'
          onChange={handleChangePassword} />
      </div>
      <div className='error-message' hidden={!error}>
          {error}
      </div>
      <button
        className={s.login_form__btn}
        type='submit'
      >
        Войти
      </button>
    </form>
	)
}

const mapStateToProps = (state: any) => ({
  isAuthorized: Boolean(state.login),
  error: state.errorMessage
})

const mapDispatchToProps = (dispatch: any) => ({
  logIn: (login: string, password: string) => dispatch({ type: 'LOG_IN', payload: { login, password } })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
