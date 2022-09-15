import Form from "../../elements/form/Form";
import "./index.scss";
function FormPage() {
  return (
    <section className="formPage visible">
      <div className="container">
        <Form
          nameForm={"Регистрация"}
          btnToForm={"Авторизоваться"}
          nameButton={"Войти"}
          idForm="reg"
          idCheckbox="checkboxReg"
        />
        {/* <Form
          nameForm={"Вход"}
          btnToForm={"Зарегистрироваться"}
          nameButton={"Войти"}
          idForm="login"
          idCheckbox="checkboxLogin"
        /> */}
      </div>
    </section>
  );
}
export default FormPage;
