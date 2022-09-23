import styled from "styled-components";

export const BasketListWrap = styled.section`
  .basket-list {
    width: 100%;
    height: calc(100vh - 116.5px - 90px);
    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-scroll);
      border-radius: 10px;
    }
  }

  .basket-list__alert {
    padding: 60px 0;
    text-align: center;
    color: var(--color-white);
    font-size: 24px;

    .basket-list__link {
      color: var(--color-basic);
    }
  }
  .container {
    max-width: 920px;
    padding: 0 5px 0 30px;
    margin: 0 auto;
  }
`;
