import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  height: 60px;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  padding: 14px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  .resource {
    display: flex;
    align-items: end;
    font-weight: 600;
    color: #222;
    font-size: 14px;
    line-height: 18px;
    .svg-link {
      padding: 0 8px;
      vertical-align: middle;
      cursor: pointer;
      &:last-of-type {
        margin-right: 8px;
      }
    }
    .world {
      display: flex;
      align-items: center;

      .language {
        margin-right: 16px;
        display: flex;
        span:first-of-type {
          margin-right: 8px;
          cursor: pointer;
        }
      }
    }
    .support {
      display: flex;
      align-items: center;
      span:last-of-type {
        margin-left: 8px;
      }
    }
    .link:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .record {
    display: flex;
    flex-direction: column;
    color: #b0b0b0;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    align-items: end;
    .dot {
      padding: 0 2.4px;
    }
    .record-link:hover {
      cursor: pointer;
      color: #000;
      text-decoration: underline;
    }
  }
`;
