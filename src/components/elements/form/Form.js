import "./index.scss";
import ButtonForOrder from "../../ui/buttonForOrder";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          if (value.length < validations[validation] && value.length > 0) {
            setMinLengthError(true);
            setMessage("Поле должно содержать не менее 4-х символов");
          } else {
            setMinLengthError(false);
            setMessage("");
          }
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

  return {
    isEmpty,
    minLengthError,
    inputValid,
    setInputValid,
    message,
    setMessage,
  };
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
// const getNotice = (login, password, setAlert) => {
//   if (password.isEmpty & login.isEmpty) {
//     setAlert({
//       ...alert,
//       alertLogin: "Поле не должно быть пустым",
//       alertPassword: "Поле не должно быть пустым",
//     });
//   } else {
//     setAlert({
//       ...alert,
//       alertLogin: "",
//       alertPassword: "",
//     });
//   }
//   //   }
//   //   if (password.isDirty && password.isEmpty) {
//   //     setAlert({
//   //       ...alert,
//   //       alertPassword: "Поле не должно быть пустым",
//   //     });
//   //   }
//   //   if (password.isDirty && password.minLengthError && !password.isEmpty) {
//   //     setAlert({
//   //       ...alert,
//   //       alertLogin: " Пароль должен содержать не менее 4-х символов",
//   //     });
//   //   }
//   // if (password.isDirty && password.isEmpty) {
//   //   setAlert({
//   //     ...alert,
//   //     alertPassword: "Поле не должно быть пустым",
//   //   });
//   // } else if (password.isDirty && password.minLengthError) {
//   //   setAlert({
//   //     ...alert,
//   //     alertLogin: " Пароль должен содержать не менее 4-х символов",
//   //   });
//   // }
//   //  {password.isDirty && password.isEmpty && (
//   //       <p className="login-form__alert">Поле не должно быть пустым</p>
//   //     )}
//   //     {password.isDirty && password.minLengthError && (
// };
function Form({ id, nameForm, nameButton, btnToForm, idForm, idCheckbox }) {
  const link = id === "reg" ? "login" : "reg";
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    alertAutho: "",
  });
  let login = useInput("", {
    isEmpty: true,
    minLength: 4,
  });
  let password = useInput("", {
    isEmpty: true,
    minLength: 4,
  });

  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
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
      login.setValue("");
      login.setDirty(false);
      password.setValue("");
      password.setDirty(false);
      setChecked(false);
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

        login.setValue("");
        login.setDirty(false);
        password.setValue("");
        password.setDirty(false);
        setChecked(false);
        setTimeout(navigate("/products"), 1000);
      } else {
        setAlert({ alertAutho: "Логин или пароль неверен" });
      }
    }
  };
  const handleReset = () => {
    login.setValue("");
    login.setDirty(false);
    password.setValue("");
    password.setDirty(false);
    setChecked(false);
  };
  const handle = id === "reg" ? handleSubmitReg : handleSubmitAutho;
  return (
    <form className={"login-form "} id={idForm} onSubmit={handle}>
      <Link to={`/${link}`}>
        <button
          onClick={handleReset}
          className="login-form__autho"
          type="button"
        >
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
          onChange={(e) => login.onChange(e)}
          onBlur={(e) => login.onBlur(e)}
          value={login.value}
        />
      </div>
      {login.isDirty && login.isEmpty && (
        <p className="login-form__alert">Поле не должно быть пустым</p>
      )}
      {login.isDirty && login.minLengthError && (
        <p className="login-form__alert">
          Логин должен содержать не менее 4-х символов
        </p>
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
      {password.isDirty && password.minLengthError && (
        <p className="login-form__alert">
          Пароль должен содержать не менее 4-х символов
        </p>
      )}
      {/* <p className="login-form__alert">{password.message}</p> */}

      <div className="checkbox login-form__check">
        <input
          type="checkbox"
          className="checkbox__mark"
          id={idCheckbox}
          name="notice"
          checked={checked}
          onClick={handleClick}
        />

        <label className="checkbox__label" htmlFor={idCheckbox}>
          Я согласен получать обновления на почту
        </label>
      </div>

      <p className="login-form__alert">{alert.alertAutho}</p>

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
