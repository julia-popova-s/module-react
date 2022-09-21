// import FormRegistrator from "../../elements/formRegistator";
// import FormAutho from "../../elements/formAutho";
import "./index.scss";
import { useParams } from "react-router-dom";
import { Form } from "../../elements/form/Form";
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

export function FormPage() {
  const params = useParams();
  const form = forms.filter((item) => item.idForm === params.id);
  const { nameForm, btnToForm, nameButton, idForm, idCheckbox } = form[0];

  return (
    <section className="form-page">
      <div className="container">
        {/* {params.id === "reg" ? (
          <FormRegistrator id={params.id} />
        ) : (
          <FormAutho id={params.id} />
        )} */}
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
