import styled from "styled-components";
export const BasketMini = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: right;

  .basket-mini__text {
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    text-align: right;
  }
  .basket-mini__icon {
    svg circle {
      transition: fill 0.3s ease;
    }
    :hover svg circle {
      fill: #a75d3b;
      transition: fill 0.3s ease;
    }
  }
`;
