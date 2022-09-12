import styled from "styled-components";
const ProductListWrap = styled.section`
  .product-list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    height: calc(100vh - 98px - 75px);
    gap: 35px 17.33px;
    overflow-x: auto;
    padding-bottom: 67px;
    max-width: 1320px;

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
    max-width: 1360px;
    padding: 0 10px 0 30px;
    margin: 0 auto;
  }
`;
export default ProductListWrap;
