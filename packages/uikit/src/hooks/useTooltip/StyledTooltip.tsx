import styled from "styled-components";
import { m as Motion } from "framer-motion";

export const Arrow = styled.div`
  z-index: -1;
  &,
  &::before {
    position: absolute;
    width: 0px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: ${({ theme }) => theme.tooltip.background};
  }
`;

export const StyledTooltip = styled(Motion.div)`
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 16px;
  max-width: 320px;
  z-index: 101;
  background: ${({ theme }) => theme.tooltip.background};
  color: #999;
  box-shadow: ${({ theme }) => theme.tooltip.boxShadow};

  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
