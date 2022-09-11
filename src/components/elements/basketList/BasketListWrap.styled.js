import styled from "styled-components";
const BasketListWrap = styled.section`
  .basket-list {
    width: 100%;
    height: calc(73vh - 113.5px - 90px);
    overflow-x: auto;

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
  }
  .container {
    max-width: 920px;
    padding: 0 10px 0 30px;
    margin: 0 auto;
  }
`;
export default BasketListWrap;
