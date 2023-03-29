import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.text.primaryColor};
  font-weight: 600;
  .btns {
    display: flex;
    margin-right: 8px;

    .btn {
      position: relative;
      line-height: 18px;
      padding: 12px;
      cursor: pointer;
      &:before {
        left: -3px;
        right: -3px;
        bottom: 0;
        content: "";
        border-radius: 22px;
        position: absolute;
        top: 0;
        z-index: -1;
      }
      &:hover:before {
        background: #f5f5f5;
      }
    }
  }
  .profile {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    width: 77px;
    padding: 5px 5px 5px 12px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 72px;
      right: 40px;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      color: #717171;

      .top, .bottom {
        padding: 8px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #eee;
      }
    }
  }
`;
