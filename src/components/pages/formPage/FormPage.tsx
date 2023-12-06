import { useLocation } from 'react-router-dom';

import { FormLogin } from '../../elements/formLogin';
import { FormRegistration } from '../../elements/formRegistration';

import style from './index.module.scss';

export function FormPage() {
  const location = useLocation();

  return (
    <section className={style.formPage}>
      <div className={style.container}>
        {location.pathname === '/registration' ? <FormRegistration /> : <FormLogin />}
      </div>
    </section>
  );
}
