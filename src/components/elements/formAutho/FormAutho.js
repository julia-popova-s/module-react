import "./index.scss";
import ButtonForOrder from "../../ui/buttonForOrder";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  // const [alert, setAlert] = useState("");
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation] && value.length > 0
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        default:
          break;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError]);

  return { isEmpty, minLengthError, inputValid, setInputValid };
};
const useInput = (initialState, validations) => {
  const [value, setValue] = useState(initialState);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value.replace(" ", ""));
  };
  const onBlur = () => {
    setDirty(true);
  };
  return { value, onChange, onBlur, isDirty, ...valid, setValue, setDirty };
};

function Form({ id }) {
  const link = id === "reg" ? "login" : "reg";
  const navigate = useNavigate();

  let login = useInput("", {
    isEmpty: true,
  });
  let password = useInput("", {
    isEmpty: true,
  });
  const [notice, setNotice] = useState(false);

  let userData = JSON.parse(localStorage.getItem(login.value));

  const handleSubmitReg = (e) => {
    e.preventDefault();
    userData = JSON.parse(localStorage.getItem(login.value));
    if (
      userData !== null &&
      login.value === userData.login &&
      password.value === userData.password
    ) {
      if (notice)
        localStorage.setItem(
          login.value,
          JSON.stringify({
            login: login.value,
            password: password.value,
            notice: notice,
          })
        );

      login.setValue("");
      login.setDirty(false);
      password.setValue("");
      password.setDirty(false);
      setNotice(false);
      setTimeout(navigate("/products"), 1000);
    }
  };
  return (
    <form className={"login-form "} id={"login"} onSubmit={handleSubmitReg}>
      <Link to={`/${link}`}>
        <button className="login-form__autho" type="button">
          {"Зарегистрироваться"}
        </button>
      </Link>
      <div className="login-form__title">{"Вход"}</div>

      <div className="login-form__item">
        <input
          className="login-form__input"
          type="text"
          name="login"
          autoComplete="on"
          placeholder="Логин"
          onChange={(e) => login.onChange(e)}
          onBlur={(e) => login.onBlur(e)}
          value={login.value}
        />
      </div>
      {login.isDirty && login.isEmpty && (
        <p className="login-form__alert">Поле не должно быть пустым</p>
      )}

      <div className="login-form__item">
        <input
          className="login-form__input"
          placeholder="Пароль"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          value={password.value}
        />
      </div>
      {password.isDirty && password.isEmpty && (
        <p className="login-form__alert">Поле не должно быть пустым</p>
      )}

      <div className="checkbox login-form__check">
        <input
          type="checkbox"
          className="checkbox__mark"
          id={"checkboxLogin"}
          name="notice"
          value={notice}
          onChange={(e) => setNotice(e.target.checked)}
        />

        <label className="checkbox__label" htmlFor={"checkboxLogin"}>
          Я согласен получать обновления на почту
        </label>
      </div>
      {userData === null && (
        <p className="login-form__alert">Логин или пароль неверен</p>
      )}

      <ButtonForOrder
        name={"Войти"}
        classNames={"login-form__btn"}
        form={"login"}
        type={"submit"}
      />
    </form>
  );
}
export default Form;
