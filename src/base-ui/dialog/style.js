import styled, { keyframes } from "styled-components";

const translateEnter = keyframes`
from{
    transform: translateY(100%);
}
to{
    transform: translateY(0);
}
`;

const translateLeave = keyframes`
from{
    transform: translateY(0);
}
to{
    transform: translateY(100%);
}
`;

export const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  #showDialog {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.28);
  }
  .info {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    max-width: 100vw;
    background-color: #fff;
    border: 1px solid;
    border-radius: 15px 15px 0 0;
    animation: ${(props) =>
        props.showDialog ? translateEnter : translateLeave}
      .5s ease;
    .btn {
      position: absolute;
      top: 24px;
      left: 24px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: #f7f7f7;
      }
    }
    .info-content {
      padding: 0 80px;
      margin: 48px 0 66px;
      .server {
        display: flex;
        .item {
          flex: 1;

          .name {
            margin-bottom: 16px;
            font-weight: 700;
          }

          .list {
            .iten {
              margin-top: 6px;
              color: #767676;
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`;
