import { useLocation } from "react-router-dom";
import { FormLogin } from "../../elements/formLogin";
import { FormRegistration } from "../../elements/formRegistration";
import styles from "./index.module.scss";

export function FormPage() {
  const location = useLocation();

  return (
    <section className={styles.formPage}>
      <div className={styles.container}>
        {location.pathname === "/registration" ? (
          <FormRegistration />
        ) : (
          <FormLogin />
        )}
      </div>
    </section>
  );
}
