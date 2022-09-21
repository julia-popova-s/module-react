import "./index.scss";
import { ButtonOrder } from "../../ui/buttonOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";

export function FormLogin() {
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

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    let userData;
    login.setDirty(true);
    password.setDirty(true);
    if (login.inputValid && password.inputValid) {
      userData = JSON.parse(localStorage.getItem(login.value));
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
            })
          );
        localStorage.setItem("userAutho", true);
        changeForm();
        setTimeout(navigate("/"), 1000);
      } else {
        setAlert("Логин или пароль неверен");
      }
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
    <form className={"formLogin "} id="login" onSubmit={handleSubmitLogin}>
      <Link to={"/registration"}>
        <button onClick={changeForm} className="formLogin__autho" type="button">
          {"Зарегистрироваться"}
        </button>
      </Link>
      <div className="formLogin__title">Вход</div>

      <div className="formLogin__item">
        <input
          className="formLogin__input"
          type="text"
          name="login"
          autoComplete="on"
          placeholder="Логин"
          onChange={(e) => login.onChange(e)}
          onBlur={(e) => login.onBlur(e)}
          value={login.value}
        />

        {login.isDirty && login.isEmpty && (
          <p className="formLogin__error">Поле не должно быть пустым</p>
        )}
        {login.isDirty && login.minLengthError && (
          <p className="formLogin__error">
            Логин должен содержать не менее 4-х символов
          </p>
        )}
      </div>

      <div className="formLogin__item">
        <input
          className="formLogin__input"
          placeholder="Пароль"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          value={password.value}
        />
        {password.isDirty && password.isEmpty && (
          <p className="formLogin__error">Поле не должно быть пустым</p>
        )}
        {password.isDirty && password.minLengthError && (
          <p className="formLogin__error">
            Пароль должен содержать не менее 4-х символов
          </p>
        )}
      </div>

      <div className="checkbox form__check">
        <input
          type="checkbox"
          className="checkbox__mark"
          id="checkboxReg"
          name="notice"
          checked={checked}
          onChange={(e) => handleChecked(e)}
        />

        <label className="checkbox__label" htmlFor="checkboxReg">
          Я согласен получать обновления на почту
        </label>
      </div>

      <p className="formLogin__alert">{alert}</p>

      <ButtonOrder
        type={"submit"}
        view={"order"}
        name={"Войти"}
        form="login"
        classNames="btn-order formLogin__btn"
      />
    </form>
  );
}
