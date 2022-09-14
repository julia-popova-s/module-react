import { OrderSum } from "./OrderSum.styled";
import getPriceWithSpace from "../../../utils/getPriceWithSpace";
import PropTypes from "prop-types";

function OrderAmount({ sum }) {
  const newSum = getPriceWithSpace(sum);
  return (
    <OrderSum>
      Заказ на сумму:
      <span className="order-sum__price">{`${newSum} ₽`}</span>
    </OrderSum>
  );
}
OrderAmount.propTypes = {
  sum: PropTypes.number,
};
export default OrderAmount;
