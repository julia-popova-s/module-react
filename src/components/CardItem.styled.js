import styled from "styled-components";
export const CardItem = styled.div`
  font-family: "Montserrat", sans-serif;
  padding: 43px 25px 32px 17px;
  border: 1px solid #d58c51;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 312px;
  max-height: 552px;
  transition: color 0.2s ease;

  &:hover {
    color: #d58c51;
    transition: color 0.2s ease;
  }

  .card__preview {
    width: 100%;
    height: auto;
    margin-bottom: 31px;
  }
  .card__title,
  .card__description,
  .card__block {
    padding-left: 5px;
  }

  .card__title {
    margin-bottom: 9px;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
  }
  .card__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  .card__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 30px;
    margin-top: auto;

    .card__add:hover {
      fill: #d58c51;
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
