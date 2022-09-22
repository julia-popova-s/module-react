import PropTypes from "prop-types";

import { BtnOrder } from "./BtnOrder.styled";
export function ButtonOrder({ view, name, type, classNames, handle }) {
  const style = view === "order" ? "btn-order" : "btn-exit";

  return (
    <BtnOrder className={classNames}>
      <button onClick={handle} type={type} className={style}>
        {name}
      </button>
    </BtnOrder>
  );
}

ButtonOrder.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  classNames: PropTypes.string,
};
