import Form from "../../elements/form/Form";
import "./index.scss";
import { useParams } from "react-router-dom";
let forms = [
  {
    nameForm: "Вход",
    btnToForm: "Зарегистрироваться",
    nameButton: "Войти",
    idForm: "login",
    idCheckbox: "checkboxLogin",
  },
  {
    nameForm: "Регистрация",
    btnToForm: "Авторизоваться",
    nameButton: "Зарегистрироваться",
    idForm: "reg",
    idCheckbox: "checkboxReg",
  },
];

function FormPage() {
  const params = useParams();
  const form = forms.filter((item) => item.idForm === params.id);
  const { nameForm, btnToForm, nameButton, idForm, idCheckbox } = form[0];

  return (
    <section className="formPage">
      <div className="container">
        <Form
          id={params.id}
          nameForm={nameForm}
          btnToForm={btnToForm}
          nameButton={nameButton}
          idForm={idForm}
          idCheckbox={idCheckbox}
        />
      </div>
    </section>
  );
}
export default FormPage;
