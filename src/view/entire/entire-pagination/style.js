import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  margin-top: 30px;
  .pageInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .Mui-selected {
      color: #fff;
      background-color: #222;
    }
    .countMessage {
      margin-top: 10px;
    }
  }
`;
