import styled from "styled-components";
export const ProductWrap = styled.section`
  overflow-x: auto;
  height: calc(100vh - 117px);

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

  .container {
    max-width: 1360px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .product {
    height: 503px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 6px;
    margin-bottom: 6px;

    @media screen and (max-width: 1130px) {
      justify-content: center;
      height: 100%;
    }
    
    .product__view {
      padding-left: 50px;

      .product__img {
        height: 100%;
      }
    }

    .product__text {
      display: flex;
      flex-direction: column;
      max-width: 528px;
      padding-top: 58px;
      max-height: 454px;
      margin-left: 30px;

      .product__title {
        font-weight: 500;
        font-size: 30px;
        line-height: 37px;
        color: var(--color-basic);
        margin-bottom: 21px;
        max-width: 415px;
      }

      .product__description {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: $white;

        @media screen and (max-width: 1230px) {
          margin-bottom: 30px;
        }
      }
    }

    .product__block-price {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: auto;

      .product__price {
        font-weight: 500;
        font-size: 23px;
        line-height: 28px;
        margin-right: 5px;
        color: var(--color-white);

        .product__weight {
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          color: var(--color-white);
          margin-right: 68px;
        }
      }
    }
  }
`;
