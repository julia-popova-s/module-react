import { BtnOrder } from "./BtnForOrder.styled.js";
function ButtonOrder({ name, type, classNames }) {
  return (
    <BtnOrder type={type} className={classNames}>
      {name}
    </BtnOrder>
  );
}
export default ButtonOrder;
