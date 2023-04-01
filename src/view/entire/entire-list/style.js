import styled from "styled-components";

export const EntireListWrapper = styled.div`
  position: relative;
  .title {
    margin-top: 30px;
    font-size: 22px;
    font-weight: 700;
    color: #222;
  }
  margin: 0 40px;
  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }
  .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.618);
  }
`;
