import "./index.scss";
import ButtonForOrder from "../../ui/buttonForOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// const validateInput = (value, setMessage) => {
//   if (value.length >= 4) {
//     setMessage("");
//   } else if (value.length < 4 && value.length > 0) {
//     setMessage("Логин должен содержать не менее 4-х символов");
//   } else if (value === "") {
//     setMessage("Поле не должно быть пустым");
//   }
// };
// const checkEmpty = () => {};

function Form({ id, nameForm, nameButton, btnToForm, idForm, idCheckbox }) {
  const link = id === "reg" ? "login" : "reg";

  const [state, setState] = useState("");
  const [messageLogin, setMessageLogin] = useState("");
  const [messagePassword, setMessagePassword] = useState("");
  const [messageAll, setMessageAll] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.type === "checkbox"
        ? target.checked
        : target.value.trim().replace(" ", "");
    const name = target.name;

    if (name === "login" && value.length >= 4) {
      setState({ ...state, [name]: value });
    } else if (name === "password" && value.length >= 4) {
      setState({ ...state, [name]: value });
    } else if (value) {
      setState({ ...state, [name]: value });
    }
  };

  const handleSubmitReg = (e) => {
    e.preventDefault();
    if (state === "") {
      setMessageLogin("Поле не должно быть пустым");
      setMessagePassword("Поле не должно быть пустым");
      setMessageAll("");
    } else if (state.login.length >= 4 && state.password.length >= 4) {
      localStorage.setItem(state.login, JSON.stringify(state));
      navigate("/login");
    }
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (state === "") {
      setMessageLogin("Поле не должно быть пустым");
      setMessagePassword("Поле не должно быть пустым");
      setMessageAll("");
    } else if (localStorage.getItem(state.login) !== null) {
      navigate("/products");
    } else {
      setMessageLogin("");
      setMessagePassword("");
      setMessageAll("Неверен");
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
      <p className="login-form__alert">{messageLogin}</p>

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
      <p className="login-form__alert">{messagePassword}</p>

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
      <p className="login-form__alert login-form__alert_pdg">{messageAll}</p>

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
