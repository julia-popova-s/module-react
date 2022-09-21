import { BtnOrder } from "./BtnOrder.styled.js";
import PropTypes from "prop-types";
export function ButtonOrder({ name, type, classNames, handle }) {
  return (
    <BtnOrder onClick={handle} type={type} className={classNames}>
      {name}
    </BtnOrder>
  );
}
ButtonOrder.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  classNames: PropTypes.string,
};
