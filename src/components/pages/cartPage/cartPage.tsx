import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { OrderAmount } from '../../elements/orderAmount';
import { ButtonOrder } from '../../ui/buttonOrder';
import { CartList } from '../../elements/cartList';
import { ButtonToBack } from '../../ui/buttonToBack';

import styles from './index.module.scss';
import { RootState } from '../../../store';

export function CartPage() {
  const items = useSelector((state: RootState) => state.cart.items);
  const amount = useSelector((state: RootState) => state.cart.totalAmount);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleExit = () => {
    localStorage.setItem('userAuth', 'false');
    setTimeout(() => navigate('/login'), 1000);
  };

  const userAuth = JSON.parse(localStorage.getItem('userAuth') as string);
  const nameBtn = userAuth ? 'Выйти' : 'Войти';

  return (
    <div className={styles.cart}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBlock}>
            <ButtonToBack handleGoBack={goBack} />
            <h2 className={styles.headerBlock__title}>корзина с выбранными товарами</h2>
            <ButtonOrder
              type={'button'}
              classNames={'btn-exit'}
              handleClick={handleExit}
              name={nameBtn}
            />
          </div>
        </div>
      </header>
      <CartList products={items} />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerBlock}>
            <OrderAmount sum={amount} />
            <ButtonOrder type={'button'} name={'Оформить заказ'} view={'order'} />
          </div>
        </div>
      </footer>
    </div>
  );
}
