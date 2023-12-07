import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { products } from '../../../store/menuList';
import { CartMini } from '../../elements/cartMini';
import { ProductList } from '../../elements/productList';
import { ButtonOrder } from '../../ui/buttonOrder';

import style from './index.module.scss';
import { RootState } from '../../../store/index';

export function ProductCatalogPage() {
  const navigate = useNavigate();

  const amount = useSelector((state: RootState) => state.cart.totalAmount);
  const quantity = useSelector((state: RootState) => state.cart.totalQuantity);

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
            <CartMini counter={quantity} sum={amount} classNames={style.headerBlock__cart} />
            <ButtonOrder view={'exit'} type={'button'} handleClick={handleExit} name={nameBtn} />
          </div>
        </div>
      </header>
      <ProductList products={products} />
    </div>
  );
}
