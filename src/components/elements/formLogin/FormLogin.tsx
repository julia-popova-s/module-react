import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { ButtonOrder } from '../../ui/buttonOrder';
import { useInput } from '../../../hooks/useInput';
import { ChangeEvent, FormEvent } from 'react';
import style from './index.module.scss';

export function FormLogin() {
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

  const handleChecked = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
  };

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let userData;
    login.setDirty(true);
    password.setDirty(true);

    if (login.inputValid && password.inputValid) {
      userData = JSON.parse(localStorage.getItem(login.value) as string);
      if (
        userData !== null &&
        login.value === userData.login &&
        password.value === userData.password
      ) {
        if (!userData.notice && checked)
          localStorage.setItem(
            login.value,
            JSON.stringify({
              login: login.value,
              password: password.value,
              notice: checked,
            }),
          );

        localStorage.setItem('userAuth', 'true');
        changeForm();
        setTimeout(() => navigate('/'), 1000);
      } else {
        setAlert('Логин или пароль неверен');
      }
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
    <form className={style.formLogin} id="login" onSubmit={handleSubmitLogin}>
      <Link to={'/registration'}>
        <button onClick={changeForm} className={style.formLogin__autho} type="button">
          {'Зарегистрироваться'}
        </button>
      </Link>
      <div className={style.formLogin__title}>Вход</div>

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
        view={'order'}
        name={'Войти'}
        form="login"
        classNames={style.formLogin__btn}
      />
    </form>
  );
}
