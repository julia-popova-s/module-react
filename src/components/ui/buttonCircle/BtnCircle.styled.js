import styled from "styled-components";
const BtnCircle = styled.button`
  border-radius: 50%;
  border: 1px solid var(--color-white);
  width: 30px;
  height: 30px;
  background-color: transparent;
  transition: all 0.2s ease;
  position: relative;
  :hover {
    background-color: var(--color-basic);
    border: 1px solid var(--color-basic);
    transition: all 0.2s ease;
    svg path {
      transition: all 0.2s ease;
      fill: white;
    }
  }
  svg path {
    transition: all 0.2s ease;
  }
  .plus,
  .minus {
    position: absolute;
    top: 25%;
    right: 25%;
  }

  .delete {
    position: absolute;
    top: 8px;
    right: 7px;
  }
`;
export default BtnCircle;
