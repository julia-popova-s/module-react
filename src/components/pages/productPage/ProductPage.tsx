import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Product } from '../../elements/product';
import { products } from '../../../store/menuList';
import { ButtonOrder } from '../../ui/buttonOrder';
import { ButtonToBack } from '../../ui/buttonToBack';
import { BasketMini } from '../../elements/basketMini';

import styles from './index.module.scss';
import { State } from '../../../customTypes/state';

export function ProductPage() {
  const amount = useSelector((state: State) => state.basket.totalAmount);
  const quantity = useSelector((state: State) => state.basket.totalQuantity);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const params = useParams<string>();
  const product = products.filter((item) => item.id === params.id);
  const { img, name, description, price, weight, units, id } = product[0];

  const handleExit = () => {
    localStorage.setItem('userAuth', 'false');
    setTimeout(() => navigate('/login'), 1000);
  };

  const userAuth = JSON.parse(localStorage.getItem('userAuth') as string);

  const nameBtn = userAuth ? 'Выйти' : 'Войти';

  return (
    <div className={styles.productDetails}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBlock}>
            <ButtonToBack handleGoBack={goBack} classNames={styles.headerBlock__btn} />
            <BasketMini counter={quantity} sum={amount} classNames={styles.headerBlock__basket} />
            <ButtonOrder view={'exit'} type={'button'} handleClick={handleExit} name={nameBtn} />
          </div>
        </div>
      </header>
      <Product
        id={id}
        img={img}
        name={name}
        description={description}
        price={price}
        weight={weight}
        units={units}
      />
    </div>
  );
}
