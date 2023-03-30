import styled from "styled-components";

export const LongForItemWrapper = styled.div`
  position: relative;
  width: ${(props) => props.itemWidth};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  .cover {
    width: 100%;
    border-radius: 6px;
  }
  .mask {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    height: 60%;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    .text {
      color: #fff;
      padding: 0 24px 32px;
      display: flex;
      flex-direction: column;
      text-align: center;
      .city {
        font-size: 18px;
        font-weight: 600;
      }
      .price {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`;
