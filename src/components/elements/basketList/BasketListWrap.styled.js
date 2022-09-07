import styled from "styled-components";
const BasketListWrap = styled.section`
  width: 100%;
  padding-bottom: 77.5px;
  overflow-x: auto;
  max-height: calc(100vh - 113.5px - 90px);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-basic);
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-back);
    border-radius: 20px;
    border: 2px solid #212121;
  }
`;
export default BasketListWrap;
