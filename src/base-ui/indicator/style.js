import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .indicator-content {
    display: flex;
    position: relative;
    > * {
      flex-shrink: 0;
    }
  }
`;
