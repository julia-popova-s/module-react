import "./index.scss";
import ButtonForOrder from "../../ui/buttonForOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toogleAuto } from "../../../store/reducers/basket";

function Form({ nameForm, btnToForm, idForm, idCheckbox }) {
  const [state, setState] = useState("");
  let userData = [];

  const navigate = useNavigate();
  const autho = useSelector((state) => state.basket.autho);
  console.log(autho);
  const [messageLogin, setMessageLogin] = useState("");
  const [messagePassword, setMessagePassword] = useState("");

  const validateInput = (value, setMessage) => {
    if (value.length >= 4) {
      setMessage("");
      userData.push(value);
    } else if (value.length < 4 && value.length > 0) {
      setMessage("Логин должен содержать не менее 4-х символов");
    } else if (value === "") {
      setMessage("Поле не должно быть пустым");
    }
  };
  console.log(userData);

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "login") {
      validateInput(value, setMessageLogin);
      setState({ ...state, [name]: value });
    } else if (name === "password") {
      validateInput(value, setMessagePassword);
      setState({ ...state, [name]: value });
    } else if (value) {
      setState({ ...state, [name]: value });
      console.log(state);
    }
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    if (state.login === "") {
      setMessageLogin("Поле не должно быть пустым");
    } else {
      setMessageLogin("");
    }
    if (state.password === "") {
      setMessagePassword("Поле не должно быть пустым");
    } else {
      setMessagePassword("");
    }
    if (state.login.length >= 4 && state.password.length >= 4) {
      localStorage.setItem(state.login, JSON.stringify(state));
      dispatch(toogleAuto(true));
      navigate("/products");
    }
  };

  return (
    <form className="login-form" id={idForm} onSubmit={handleSubmit}>
      <button className="login-form__autho" type="button">
        {btnToForm}
      </button>
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
      <p className="login-form__alert login-form__alert_pdg"></p>

      <ButtonForOrder
        name={"Войти"}
        classNames={"login-form__btn"}
        form={idForm}
        type={"submit"}
      />
    </form>
  );
}
export default Form;
