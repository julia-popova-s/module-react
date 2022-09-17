import "./index.scss";
import ButtonForOrder from "../../ui/buttonForOrder";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// const validateInputReg = (state, setState) => {
//   if (state.login === "") {
//     setState("Поле не должно быть пустым");
//   }
//   if (state.password === "") {
//     setState("Поле не должно быть пустым");
//   }
// };
// const validateInputReg = (state, setState) => {
//   if (state === "") {
//     setState("Поле не должно быть пустым");
//   } else if (state.length > 0 && state.length < 4) {
//     setState("Логин и пароль должен содержать не менее 4-х символов");
//   } else {
//     setState("");
//   }
// };
const validateInputReg = (form, message, setMessage) => {
  if (form.login === "" && form.password === "") {
    setMessage({
      ...message,
      loginAlert: "Поле не должно быть пустым",
      passwordAlert: "Поле не должно быть пустым",
    });
  } else {
    setMessage({
      ...message,
      loginAlert: "",
      passwordAlert: "",
    });
  }
};
const validateInputLogin = (form, message, setMessage) => {
  if (form.login === "" && form.password === "") {
    setMessage({
      ...message,
      authoAlert: "Логин или пароль неверен",
    });
  } else {
    setMessage({
      ...message,
      authoAlert: "",
    });
  }
};

function Form({ id, nameForm, nameButton, btnToForm, idForm, idCheckbox }) {
  const link = id === "reg" ? "login" : "reg";
  const [form, setForm] = useState({
    login: "",
    password: "",
    notice: false,
  });
  const [message, setMessage] = useState({
    loginAlert: "",
    passwordAlert: "",
    authoAlert: "",
  });
  const navigate = useNavigate();

  const handleSubmitReg = (e) => {
    e.preventDefault();

    const login = form.login;
    const password = form.password;
    console.log(form.login, form.password, form.notice);
    if (id === "reg") {
      validateInputReg(form, message, setMessage);
      if (form.notice && form.login.length >= 4 && form.password.length >= 4) {
        localStorage.setItem(form.login, JSON.stringify(form));
        e.target.reset();
        setTimeout(() => navigate("/login"), 1000);
      } else if (
        form.notice ||
        (form.login.length >= 4 && form.password.length >= 4)
      ) {
        localStorage.setItem(form.login, JSON.stringify({ login, password }));
        e.target.reset();
        setTimeout(() => navigate("/login"), 1000);
      }
    } else {
      validateInputLogin(form, message, setMessage);
    }
  };

  const handleUpdate = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <form className={"login-form "} id={idForm} onSubmit={handleSubmitReg}>
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
          onChange={handleUpdate}
          value={form.login}
        />
      </div>
      <p className="login-form__alert">{message.loginAlert}</p>

      <div className="login-form__item">
        <input
          className="login-form__input"
          placeholder="Пароль"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={handleUpdate}
          value={form.password}
        />
      </div>
      <p className="login-form__alert">{message.passwordAlert}</p>

      <div className="checkbox login-form__check">
        <input
          onChange={handleUpdate}
          type="checkbox"
          className="checkbox__mark"
          id={idCheckbox}
          name="notice"
          value={form.notice}
        />

        <label className="checkbox__label" htmlFor={idCheckbox}>
          Я согласен получать обновления на почту
        </label>
      </div>
      <p className="login-form__alert login-form__alert_pdg">
        {message.authoAlert}
      </p>

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
