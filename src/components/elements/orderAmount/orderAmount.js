import { OrderSum } from "./OrderSum.styled";
import getPriceWithSpace from "../base/getPriceWithSpace";
function OrderAmount({ sum }) {
  const newSum = getPriceWithSpace(sum);
  return (
    <OrderSum>
      Заказ на сумму:
      <span className="order-sum__price">{newSum} ₽</span>
    </OrderSum>
  );
}
export default OrderAmount;
