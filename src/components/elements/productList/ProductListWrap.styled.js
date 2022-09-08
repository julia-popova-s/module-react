import styled from "styled-components";
const ProductListWrap = styled.section`
  .product-list {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    height: calc(100vh - 173px);
    gap: 35px 14px;
    overflow-x: auto;
    padding-bottom: 67px;

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
    padding: 0 22px 0 30px;
  }
`;
export default ProductListWrap;
