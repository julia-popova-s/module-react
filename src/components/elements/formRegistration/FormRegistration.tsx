import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FormEvent, ChangeEvent } from 'react';
import { useInput } from '../../../hooks/useInput';
import { ButtonOrder } from '../../ui/buttonOrder';

import style from './index.module.scss';

export function FormRegistration() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState('');

  const login = useInput('', {
    isEmpty: true,
    minLength: 4,
  });

  const password = useInput('', {
    isEmpty: true,
    minLength: 4,
  });

  const [checked, setChecked] = useState(false);

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleSubmitReg = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.setDirty(true);
    password.setDirty(true);

    if (login.inputValid && password.inputValid) {
      checked
        ? localStorage.setItem(
            login.value,
            JSON.stringify({
              login: login.value,
              password: password.value,
              notice: checked,
            }),
          )
        : localStorage.setItem(
            login.value,
            JSON.stringify({
              login: login.value,
              password: password.value,
            }),
          );
      localStorage.setItem('userAuth', 'true');
      changeForm();
      setTimeout(() => navigate('/'), 1000);
    }
  };

  const changeForm = () => {
    login.setValue('');
    login.setDirty(false);
    password.setValue('');
    password.setDirty(false);
    setChecked(false);
    setAlert('');
  };

  return (
    <form className={style.formLogin} id="reg" onSubmit={handleSubmitReg}>
      <Link to={'/login'}>
        <button onClick={changeForm} className={style.formLogin__autho} type="button">
          Авторизоваться
        </button>
      </Link>
      <div className={style.formLogin__title}>Регистрация</div>

      <div className={style.formLogin__item}>
        <input
          className={style.formLogin__input}
          type="text"
          name="login"
          autoComplete="on"
          placeholder="Логин"
          onChange={(e) => login.onChange(e)}
          onBlur={() => login.onBlur()}
          value={login.value}
        />

        {login.isDirty && login.isEmpty && (
          <p className={style.formLogin__error}>Поле не должно быть пустым</p>
        )}
        {login.isDirty && login.minLengthError && (
          <p className={style.formLogin__error}>Логин должен содержать не менее 4-х символов</p>
        )}
      </div>

      <div className={style.formLogin__item}>
        <input
          className={style.formLogin__input}
          placeholder="Пароль"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => password.onChange(e)}
          onBlur={() => password.onBlur()}
          value={password.value}
        />
        {password.isDirty && password.isEmpty && (
          <p className={style.formLogin__error}>Поле не должно быть пустым</p>
        )}
        {password.isDirty && password.minLengthError && (
          <p className={style.formLogin__error}>Пароль должен содержать не менее 4-х символов</p>
        )}
      </div>

      <div className={style.checkbox}>
        <input
          type="checkbox"
          className={style.checkbox__mark}
          id="checkboxReg"
          name="notice"
          checked={checked}
          onChange={(e) => handleChecked(e)}
        />

        <label className={style.checkbox__label} htmlFor="checkboxReg">
          Я согласен получать обновления на почту
        </label>
      </div>

      <p className={style.formLogin__alert}>{alert}</p>

      <ButtonOrder
        type={'submit'}
        name={'Зарегистрироваться'}
        form="reg"
        view={'order'}
        classNames={style.formLogin__btn}
      />
    </form>
  );
}
