import Form from "../../elements/form/Form";
import "./index.scss";
function FormPage() {
  return (
    <section className="formPage visible" id="reg">
      <div className="container">
        <Form
          nameForm={"Регистрация"}
          btnToForm={"Авторизоваться"}
          nameButton={"Регистрация"}
        />
        <Form
          nameForm={"Вход"}
          btnToForm={"Зарегистрироваться"}
          nameButton={"Войти"}
        />
      </div>
    </section>
  );
}
export default FormPage;
