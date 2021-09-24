import styled from "styled-components";
import { device } from "../../../Base/breakpoints";

export const InnerClock = styled.div`
  border-radius: 20px;
  background-color: #b4c7c9;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  @media ${device.xs} {
    width: 19rem;
    height: 7rem;
  }

  @media ${device.sm} {
    width: 39.6rem;
    height: 12rem;
  }
  @media ${device.lg} {
    width: 66rem;
    height: 20rem;
  }
`;
