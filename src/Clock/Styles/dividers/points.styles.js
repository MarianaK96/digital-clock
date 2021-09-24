import styled from "styled-components";
import { device } from "../../../Base/breakpoints";

export const Point = styled.div`
  background-color: #3b3c36;
  border-radius: 50px;
  @media ${device.xs} {
    width: 0.5rem;
    height: 0.5rem;
  }

  @media ${device.sm} {
    width: 1rem;
    height: 1rem;
  }

  @media ${device.lg} {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
