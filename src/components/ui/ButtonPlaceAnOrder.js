import { ButtonOrder } from "./ButtonOrder.styled.js";

function ButtonPlaceAnOrder({ name }) {
  return (
    <ButtonOrder>
      <button className="btn-order__item">{name}</button>
    </ButtonOrder>
  );
}
export default ButtonPlaceAnOrder;
