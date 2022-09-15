import "./index.scss";
import ButtonForOrder from "../../ui/buttonForOrder";
function Form({ nameForm, btnToForm }) {
  return (
    <form className="login-form" id="reg-form">
      <button className="login-form__autho" type="button">
        {btnToForm}
      </button>
      <div className="login-form__title">{nameForm}</div>

      <div className="login-form__item">
        <input
          className="login-form__input"
          type="email"
          name="email"
          autoComplete="on"
          placeholder="Логин"
        />
      </div>
      <p className="login-form__alert"></p>

      <div className="login-form__item">
        <input
          className="login-form__input"
          placeholder="Пароль"
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </div>
      <p className="login-form__alert"></p>

      <div className="checkbox login-form__check">
        <input
          type="checkbox"
          className="checkbox__mark"
          id="checkbox-reg"
          name="rules"
        />

        <label className="checkbox__label" htmlFor="checkbox-reg">
          Я согласен получать обновления на почту
        </label>
      </div>
      <p className="login-form__alert login-form__alert_pdg"></p>

      {/* <button className="login-form__btn" type="submit" form="reg-form">
        {nameButton}
      </button> */}
      <ButtonForOrder name={"Войти"} classNames={"login-form__btn"} />
    </form>
  );
}
export default Form;
