import styled from "styled-components";
export const BtnOrder = styled.button`
  font-family: var(--font-family);
  box-sizing: border-box;
  @include setFontSize(400, 14px, 17px);
  width: 200px;
  height: 42px;
  color: #131313;
  background-color: var(--color-basic);
  transition: box-shadow 0.3s ease;

  :hover {
    box-shadow: 0 0 10px rgb(255, 0, 0);
    transition: box-shadow 0.3s ease;
  }
`;
