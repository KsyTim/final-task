import React from "react";

export const Login = () => {
  return (
    <section className="login">
      <form className="login-form">
        <h2 className="login-form-item login-form-title">Авторизация</h2>
        <div className="login-form-item login-form-container">
          <fieldset className="login-form-container__item login-form-username">
          <label htmlFor="username" className="form-label form-label-username">Логин</label>
          <input
            type="text"
            className="form-input form-input-username"
            name="username"
            required
            placeholder="username@e.mail"
          ></input>
        </fieldset>
        <fieldset className="login-form-container__item login-form-password">
          <label htmlFor="password" className="form-label form-label-password">Пароль</label>
          <input
            type="password"
            className="form-input form-input-password"
            name="password"
            required
            placeholder="********"
          ></input>
        </fieldset>
        </div>
        <button type="submit" className="login-form-item login-form-btn">Вход</button>
      </form>
    </section>
  )
}