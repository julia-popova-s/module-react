import { ButtonExitSquare } from "./ButtonExitSquare.styled";

export function ButtonExit({ name, handle }) {
  return <ButtonExitSquare onClick={handle}>{name}</ButtonExitSquare>;
}
