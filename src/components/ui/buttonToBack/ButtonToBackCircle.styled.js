import styled from "styled-components";
export const ButtonToBackCircle = styled.div`
  border-radius: 50%;
  border: 1px solid var(--color-basic);
  width: 32px;
  height: 32px;
  background-color: transparent;
  transition: all 0.3s ease;
  position: relative;

  :hover {
    background-color: var(--color-basic);
    border: 1px solid var(--color-basic);
    transition: all 0.3s ease;
    cursor: pointer;
    .arrow path {
      transition: all 0.3s ease;
      fill: var(--color-white);
    }
  }

  .arrow path {
    transition: all 0.3s ease;
  }
  .arrow {
    position: absolute;
    top: 30%;
    right: 30%;
  }
`;
