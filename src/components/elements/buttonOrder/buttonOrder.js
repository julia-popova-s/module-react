import BtnOrder from "./BtnOrder.styled.js";
const ButtonOrder = ({ name, type, classNames }) => {
  return (
    <BtnOrder type={type} className={classNames}>
      {name}
    </BtnOrder>
  );
};
export default ButtonOrder;
