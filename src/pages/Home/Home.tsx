import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authData } from '../../services/authService'

import s from './Home.module.scss'

interface Props {
  logIn: Function,
  error: boolean,
  isAuthorized: boolean
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

  // Данная функция добавлена для реализации пункта задания про кнопку.
  // В предыдущем коммите реализован, на мой взгляд, более безопасный и
  // логичный функционал
  const isDisabled = (login: string, password: string) => {
    return (login === authData.login && password === authData.password)
            ? false
            : true
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
        disabled={isDisabled(login, password)}
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
