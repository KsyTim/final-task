import React from "react";

export const Login = () => {
  let value = '';
  let validateValue;
  // сохраняем пароль
  const inputPass = (event) => {
    if (event.target.value.toString().slice(-1) !== '*') {
      value += event.target.value.toString().slice(-1);
    }
  }
  // валидация и маска пароля 
  const validatePassword = (event) => {
    event.target.value = event.target.value.replace(/[\s\t\n\v\f\r]/gui, '');
    event.target.value = event.target.value.replace(/[\w\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gui, '*');
    validateValue = event.target.value;
    if (value.length - 1 === validateValue.length) {
      value = value.substring(0, value.length - 1);
    }
  }
  // если пытаемся переместиться по содержимому пароля влево/вправо, чтобы стереть какой-то символ, отменяем данное поведение
  const handleKeyDown = (event) => {
    (event.key === "ArrowLeft" || event.key === "ArrowRight") &&
      event.preventDefault();
  }
  // если пытаемся кликнуть на какой-то позиции в подстроке, куда введен пароль/его часть, чтобы изменить или стереть какой-либо символ, то отменяем данное поведение и перебрасываем курсор в конец строки
  const handleClick = (event) => {
    event.target.value.length &&
      event.preventDefault();
      event.target.selectionStart = event.target.value.length;
  }
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
            placeholder="Введите логин"
          />
        </fieldset>
        <fieldset className="login-form-container__item login-form-password">
          <label htmlFor="password" className="form-label form-label-password">Пароль</label>
          <input
            type="text"
            className="form-input form-input-password"
            name="password"
            required
            placeholder="Введите пароль"
            onInput={inputPass}
            onChange={validatePassword}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          />
        </fieldset>
        </div>
        <button type="submit" className="login-form-item login-form-btn btn-success">Вход</button>
      </form>
    </section>
  )
}