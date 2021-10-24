import React from 'react'

import s from './Home.module.scss'

interface Props {

}

export const Home = (props: Props) => {
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
