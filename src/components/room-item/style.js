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
    position: relative;
    .cover {
      position: relative;
      padding: 80% 0 0;
      border-radius: 6px;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .slider {
      position: relative;
      &:hover {
        .prevent,
        .next {
          background-image: linear-gradient(
            -180deg,
            rgba(0, 0, 0, 0) 3%,
            rgb(0, 0, 0, 0.3) 100%
          );
          z-index: 1;
        }
      }
      .prevent,
      .next {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        span {
          margin: 0 20px;
        }
      }
      .prevent {
        top: 0;
        left: 0;
        bottom: 0;
      }
      .next {
        top: 0;
        right: 0;
        bottom: 0;
      }
      .indicator {
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        width: 30%;
        margin: 0 auto;
        z-index: 1;
        .dot_item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20%;
          .dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
            opacity: .6;
            border-radius: 50%;
            &.active {
              width: 8px;
              height: 8px;
             opacity: 1;
            }
          }
        }
      }
      .cover {
        position: relative;
        padding: 80% 0 0;
        border-radius: 6px;
        box-sizing: border-box;
        overflow: hidden;
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
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
      z-index: 2;
    }
    .detail {
      margin-top: 10px;
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
