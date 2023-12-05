import styled from "styled-components";

export const BtnCircle = styled.button`
  border-radius: 50%;
  border: 1px solid var(--color-white);
  width: 30px;
  height: 30px;
  background-color: transparent;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;

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

  .delete {
    margin: 1px 0 0 1px;
  }
`;
