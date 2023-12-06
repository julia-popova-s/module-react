import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { products } from '../../../store/menuList';
import { BasketMini } from '../../elements/basketMini';
import { ProductList } from '../../elements/productList';
import { ButtonOrder } from '../../ui/buttonOrder';

import style from './index.module.scss';
import { State } from '../../../customTypes/state';

export function ProductCatalogPage() {
  const navigate = useNavigate();

  const amount = useSelector((state: State) => state.basket.totalAmount);
  const quantity = useSelector((state: State) => state.basket.totalQuantity);

  const handleExit = () => {
    localStorage.setItem('userAuth', 'false');
    setTimeout(() => navigate('/login'), 1000);
  };

  const userAuth = JSON.parse(localStorage.getItem('userAuth') as string);
  const nameBtn = userAuth ? 'Выйти' : 'Войти';

  return (
    <div className={style.productCatalog}>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.headerBlock}>
            <h1 className={style.headerBlock__title}>наша продукция</h1>
            <BasketMini counter={quantity} sum={amount} classNames={style.headerBlock__basket} />
            <ButtonOrder view={'exit'} type={'button'} handleClick={handleExit} name={nameBtn} />
          </div>
        </div>
      </header>
      <ProductList products={products} />
    </div>
  );
}
