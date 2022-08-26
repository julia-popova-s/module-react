import styled from "styled-components";
export const CardItem = styled.div`
  font-family: var(--font-family);
  padding: 43px 25px 32px 21px;
  border: 1px solid var(--color-basic);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 312px;
  height: 552px;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--color-basic);
    transition: color 0.2s ease;
  }

  .card__preview {
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 31px;
  }

  .card__title {
    margin-bottom: 9px;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    min-height: 42px;
  }
  .card__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;
  }

  .card__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 30px;
    margin-top: auto;

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
      top: 7px;
      right: 7px;
    }

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
  }
`;
