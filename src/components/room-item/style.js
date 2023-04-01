import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${(props) => props.itemWidth};
  margin-top: 16px;
  box-sizing: border-box;
  padding: 8px;
  cursor: pointer;
  .inner {
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    .cover {
      position: relative;
      padding: 80% 0 0;
      border-radius: 6px;
      overflow: hidden;
      margin-bottom: 10px;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .info {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 2px 5px;
        border-radius: 6px;
        background-color: #fff;
        font-weight: 700;
        font-size: 10px;
        color: #767676;
      }
      .like {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
    .detail {
      .verifyInfo {
        margin-bottom: 10px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        .message {
          font-size: 12px;
          color: ${(props) => props.verifyColor};
          max-width: 60%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .rating {
          display: flex;
          .star {
            color: ${(props) => props.starColor};
            margin-right: 5px;
            display: flex;
            align-items: center;
          }
        }
      }
      .desc {
        margin-bottom: 10px;
        line-height: 24px;
        font-weight: 600;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .price {
        font-weight: 700;
        margin-bottom: 10px;
        .night {
          font-weight: lighter;
          margin-left: 5px;
          font-size: 12px;
        }
      }
    }
  }
`;
