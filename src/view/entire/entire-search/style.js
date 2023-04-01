import styled from "styled-components";

export const EntireSearchWrapper = styled.div`
  padding: 0 40px;
  border-bottom: 1px solid rgb(238, 238, 238);
  .item {
    min-width: 70px;
    flex-shrink: 0;
    box-sizing: border-box;
    line-height: 30px;
    text-align: center;
    padding: 5px 10px;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 5px;
    margin: 10px 15px 10px 2px;
    cursor: pointer;
    :last-child {
      margin-right: 0;
    }
    &:hover {
      box-shadow: ${(props) => props.theme.mixin.boxShadow};
    }
  }
  .active {
    background-color: #00848a;
    color: #fff;
  }
`;
