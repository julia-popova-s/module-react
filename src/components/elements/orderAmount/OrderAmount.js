import { OrderSum } from "./OrderSum.styled";
import { getFormatNumber } from "../../../utils/getFormatNumber";
import PropTypes from "prop-types";

export function OrderAmount({ sum }) {
  const newSum = getFormatNumber(sum);
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
