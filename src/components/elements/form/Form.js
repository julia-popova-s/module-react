import "./index.scss";
import { ButtonOrder } from "../../ui/buttonOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useInput } from "../../../hooks/useInput";

export function Form({
  id,
  nameForm,
  nameButton,
  btnToForm,
  idForm,
  idCheckbox,
}) {
  const link = id === "reg" ? "login" : "reg";
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");
  let login = useInput("", {
    isEmpty: true,
    minLength: 4,
  });
  let password = useInput("", {
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

    if (id === "reg" && login.inputValid && password.inputValid) {
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

      handleReset();
      setTimeout(navigate("/login"), 1000);
    }
  };
  const handleSubmitAutho = (e) => {
    e.preventDefault();
    let userData;
    login.setDirty(true);
    password.setDirty(true);
    if (id === "login" && login.inputValid && password.inputValid) {
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
        handleReset();
        setTimeout(navigate("/products"), 1000);
      } else {
        setAlert("Логин или пароль неверен");
      }
    }
  };
  const handleReset = () => {
    login.setValue("");
    login.setDirty(false);
    password.setValue("");
    password.setDirty(false);
    setChecked(false);
    setAlert("");
  };
  const handle = id === "reg" ? handleSubmitReg : handleSubmitAutho;

  return (
    <form className={"formLogin "} id={idForm} onSubmit={handle}>
      <Link to={`/${link}`}>
        <button
          onClick={handleReset}
          className="formLogin__autho"
          type="button"
        >
          {btnToForm}
        </button>
      </Link>
      <div className="formLogin__title">{nameForm}</div>

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
      {/* <p className="formLogin__alert"></p> */}

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
      {/* <p className="formLogin__alert"></p> */}

      <div className="checkbox form__check">
        <input
          type="checkbox"
          className="checkbox__mark"
          id={idCheckbox}
          name="notice"
          checked={checked}
          onChange={(e) => handleChecked(e)}
        />

        <label className="checkbox__label" htmlFor={idCheckbox}>
          Я согласен получать обновления на почту
        </label>
      </div>

      <p className="formLogin__alert">{alert}</p>

      <ButtonOrder
        name={nameButton}
        classNames={"formLogin__btn"}
        form={idForm}
        type={"submit"}
      />
    </form>
  );
}
