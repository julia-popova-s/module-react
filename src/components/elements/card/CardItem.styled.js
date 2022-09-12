import styled from "styled-components";
export const CardItem = styled.div`
  font-family: var(--font-family);
  border: 1px solid var(--color-basic);
  box-sizing: border-box;
  max-width: 312px;
  height: 552px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-basic);
    transition: color 0.2s ease;
  }

  .card__preview {
    padding: 43px 20px 0 20px;
    width: 100%;
    min-height: 345px;

    .card__img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .card__text {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1 0 auto;
    height: calc(100% - 345px);
    padding: 0 27px 0 21px;

    .card__title {
      margin-bottom: ${({ margin }) => (margin ? "9px" : "13px")};
      font-weight: 500;
      font-size: 17px;
      line-height: 21px;
      max-height: 42px;
    }

    .card__description {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      max-height: 68px;
    }

    .card__block-price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 30px;
      margin-top: auto;
      margin-bottom: 32px;
      padding-top: 8px;

      .card__price {
        font-weight: 500;
        font-size: 17px;
        line-height: 21px;

        .card__weight {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
        }
      }

      .card__btn-add {
        border-radius: 50%;
        border: 1px solid var(--color-white);
        width: 30px;
        height: 30px;
        background-color: transparent;
        transition: all 0.2s ease;
        position: relative;
      }

      .card__btn-add:hover {
        background-color: var(--color-basic);
        border: 1px solid var(--color-basic);
        transition: all 0.2s ease;
      }

      .card__btn-plus {
        position: absolute;
        top: 25%;
        right: 25%;
      }
    }
  }
`;
