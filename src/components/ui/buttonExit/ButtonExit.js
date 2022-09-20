import { ButtonExitSquare } from "./ButtonExitSquare.styled";

function ButtonExit({ name, handle }) {
  return <ButtonExitSquare onClick={handle}>{name}</ButtonExitSquare>;
}
export default ButtonExit;
