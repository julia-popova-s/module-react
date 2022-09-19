import "./index.scss";
import ButtonForOrder from "../../ui/buttonForOrder";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [alert, setAlert] = useState("");
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

  return { isEmpty, minLengthError, inputValid };
};
const useInput = (value, setValue, validations) => {
  // const [value, setValue] = useState(initialState);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value.replace(" ", ""));
  };
  const onBlur = () => {
    setDirty(true);
  };
  return { value, onChange, onBlur, isDirty, ...valid };
};

function Form({ id, nameForm, nameButton, btnToForm, idForm, idCheckbox }) {
  const link = id === "reg" ? "login" : "reg";
  const navigate = useNavigate();
  const [valueLogin, setValueLogin] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  let login = useInput(valueLogin, setValueLogin, {
    isEmpty: true,
    minLength: 4,
  });
  const password = useInput(valuePassword, setValuePassword, {
    isEmpty: true,
    minLength: 4,
  });

  const handleSubmitReg = (e) => {
    e.preventDefault();
    if (login.inputValid && password.inputValid) {
      setValueLogin("");
      setValuePassword("");
      navigate("/login");
    }
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

      <div className="checkbox login-form__check">
        <input
          type="checkbox"
          className="checkbox__mark"
          id={idCheckbox}
          name="notice"
        />

        <label className="checkbox__label" htmlFor={idCheckbox}>
          Я согласен получать обновления на почту
        </label>
      </div>
      {/* {password.isDirty && password.isEmpty && (
        <p className="login-form__alert">Поле не может быть пустым</p>
      )}
      {password.isDirty && password.minLengthError && (
        <p className="login-form__alert">Пароль должен 4 симв</p>
      )} */}

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
