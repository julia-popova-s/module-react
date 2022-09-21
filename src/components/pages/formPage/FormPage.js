import "./index.scss";
import { useLocation } from "react-router-dom";
import { FormLogin } from "../../elements/formLogin";
import { FormRegistration } from "../../elements/formRegistration";

export function FormPage() {
  const location = useLocation();

  return (
    <section className="form-page">
      <div className="container">
        {location.pathname === "/registration" ? (
          <FormRegistration />
        ) : (
          <FormLogin />
        )}
      </div>
    </section>
  );
}
