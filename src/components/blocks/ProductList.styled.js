import styled from "styled-components";
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 173px);
  gap: 35px 13px;
  overflow-x: auto;
  padding-bottom: 67px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #d58c51;
    border-radius: 20px;
    /* цвет дорожки */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #161516;
    border-radius: 20px;
    border: 2px solid #212121;
  }
`;
