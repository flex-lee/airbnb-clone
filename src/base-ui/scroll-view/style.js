import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;

  .scroll {
    overflow: hidden;
    .scrollView {
      display: flex;
      transition: transform 250ms ease;
    }
  }
  .left,
  .right {
    cursor: pointer;
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 0.5px solid rgb(0 0 0/0.3);
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }
  }
  .left {
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .right {
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
`;
