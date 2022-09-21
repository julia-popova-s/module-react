import { ButtonOrder } from "../../ui/buttonOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";
import styles from "./index.module.scss";

export function FormRegistration() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");
  const login = useInput("", {
    isEmpty: true,
    minLength: 4,
  });
  const password = useInput("", {
    isEmpty: true,
    minLength: 4,
  });

  const [checked, setChecked] = useState(false);
  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };
  const handleSubmitReg = (e) => {
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
            })
          )
        : localStorage.setItem(
            login.value,
            JSON.stringify({
              login: login.value,
              password: password.value,
            })
          );

      changeForm();
      setTimeout(navigate("/"), 1000);
    }
  };

  const changeForm = () => {
    login.setValue("");
    login.setDirty(false);
    password.setValue("");
    password.setDirty(false);
    setChecked(false);
    setAlert("");
  };

  return (
    <form className={styles.formLogin} id="reg" onSubmit={handleSubmitReg}>
      <Link to={"/login"}>
        <button
          onClick={changeForm}
          className={styles.formLogin__autho}
          type="button"
        >
          Авторизоваться
        </button>
      </Link>
      <div className={styles.formLogin__title}>Регистрация</div>

      <div className={styles.formLogin__item}>
        <input
          className={styles.formLogin__input}
          type="text"
          name="login"
          autoComplete="on"
          placeholder="Логин"
          onChange={(e) => login.onChange(e)}
          onBlur={(e) => login.onBlur(e)}
          value={login.value}
        />

        {login.isDirty && login.isEmpty && (
          <p className={styles.formLogin__error}>Поле не должно быть пустым</p>
        )}
        {login.isDirty && login.minLengthError && (
          <p className={styles.formLogin__error}>
            Логин должен содержать не менее 4-х символов
          </p>
        )}
      </div>

      <div className={styles.formLogin__item}>
        <input
          className={styles.formLogin__input}
          placeholder="Пароль"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          value={password.value}
        />
        {password.isDirty && password.isEmpty && (
          <p className={styles.formLogin__error}>Поле не должно быть пустым</p>
        )}
        {password.isDirty && password.minLengthError && (
          <p className={styles.formLogin__error}>
            Пароль должен содержать не менее 4-х символов
          </p>
        )}
      </div>

      <div className={styles.checkbox}>
        <input
          type="checkbox"
          className={styles.checkbox__mark}
          id="checkboxReg"
          name="notice"
          checked={checked}
          onChange={(e) => handleChecked(e)}
        />

        <label className={styles.checkbox__label} htmlFor="checkboxReg">
          Я согласен получать обновления на почту
        </label>
      </div>

      <p className={styles.formLogin__alert}>{alert}</p>

      <ButtonOrder
        type={"submit"}
        name={"Зарегистрироваться"}
        form="reg"
        view={"order"}
        classNames={styles.formLogin__btn}
      />
    </form>
  );
}
