import "./buttonOrder.scss";
import PropTypes from "prop-types";
export function ButtonOrder({ name, type, classNames, handle }) {
  return (
    <button onClick={handle} type={type} className={classNames}>
      {name}
    </button>
  );
}
ButtonOrder.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  classNames: PropTypes.string,
};
