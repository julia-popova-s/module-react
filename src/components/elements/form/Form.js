import "./index.scss";
import ButtonForOrder from "../../ui/buttonForOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const checkEmpty = (state, setState) => {
  if (state === "") {
    setState("Поле не должно быть пустым");
  } else if (state.length > 0 && state.length < 5) {
    setState("Логин должен содержать не менее 4-х символов");
  } else {
    setState("");
  }
};

function Form({ id, nameForm, nameButton, btnToForm, idForm, idCheckbox }) {
  const link = id === "reg" ? "login" : "reg";

  const [state, setState] = useState({});
  const [message, setMessage] = useState("");
  const [messageAutho, setMessageAutho] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? target.checked
        : target.value.trim().replace(" ", "");
    const name = target.name;
    if (name === "login") {
      setState({ ...state, [name]: value });
    } else if (name === "password") {
      setState({ ...state, [name]: value });
    } else if (value) {
      setState({ ...state, [name]: value });
    }
  };

  const handleSubmitReg = (e) => {
    e.preventDefault();
    if (state === "") {
      setMessage("Поле не должно быть пустым");
    } else if (
      state !== "" &&
      state.login.length < 4 &&
      state.password.length > 0
    ) {
      setMessage("Логин должен содержать не менее 4-х символов");
    } else if (
      state !== "" &&
      state.login.length >= 4 &&
      state.password.length >= 4
    ) {
      localStorage.setItem(state.login, JSON.stringify(state));
      setState("");
      setMessage("");
      e.target.reset();
      console.log(state);
      setTimeout(() => navigate("/login"), 1000);
    }
    console.log(state);
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (state === "") {
      setMessage("Поле не должно быть пустым");
    } else if (localStorage.getItem(state.login) !== null) {
      e.target.reset();
      setTimeout(() => navigate("/products"), 1000);
    } else {
      setMessage("");
    }
  };
  const handle =
    nameButton === "Регистрация" ? handleSubmitReg : handleSubmitLogin;
  return (
    <form className={"login-form "} id={idForm} onSubmit={handle}>
      <Link to={`/${link}`}>
        <button className="login-form__autho" type="button">
          {btnToForm}
        </button>
      </Link>
      <div className="login-form__title">{nameForm}</div>

      <div className="login-form__item">
        <input
          className="login-form__input"
          type="text"
          name="login"
          autoComplete="on"
          placeholder="Логин"
          onChange={handleChange}
          value={state.name}
        />
      </div>
      <p className="login-form__alert">{message}</p>

      <div className="login-form__item">
        <input
          className="login-form__input"
          placeholder="Пароль"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={handleChange}
          value={state.name}
        />
      </div>
      <p className="login-form__alert">{message}</p>

      <div className="checkbox login-form__check">
        <input
          onChange={handleChange}
          type="checkbox"
          className="checkbox__mark"
          id={idCheckbox}
          name="notice"
          value={state.name}
        />

        <label className="checkbox__label" htmlFor={idCheckbox}>
          Я согласен получать обновления на почту
        </label>
      </div>
      <p className="login-form__alert login-form__alert_pdg">{messageAutho}</p>

      <ButtonForOrder
        name={nameButton}
        classNames={"login-form__btn"}
        form={idForm}
        type={"submit"}
      />
    </form>
  );
}
export default Form;
