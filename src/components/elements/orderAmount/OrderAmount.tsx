import { FC } from 'react';
import { OrderSum } from './OrderSum.styled';
import { getFormatNumber } from '../../../utils/getFormatNumber';

type OrderAmountProps = {
  sum: number;
};

export const OrderAmount: FC<OrderAmountProps> = ({ sum }) => {
  const newSum = getFormatNumber(sum);

  return (
    <OrderSum>
      Заказ на сумму:
      <span className="order-sum__price">{newSum}</span>
    </OrderSum>
  );
};
