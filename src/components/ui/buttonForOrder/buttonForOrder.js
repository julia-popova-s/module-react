import { BtnOrder } from "./BtnForOrder.styled.js";
import PropTypes from "prop-types";
function ButtonOrder({ name, type, classNames }) {
  return (
    <BtnOrder type={type} className={classNames}>
      {name}
    </BtnOrder>
  );
}
ButtonOrder.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  classNames: PropTypes.string,
};
export default ButtonOrder;
