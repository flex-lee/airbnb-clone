import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  .info {
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    color: ${(props) => props.color};
    .text {
      margin-right: 6px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
