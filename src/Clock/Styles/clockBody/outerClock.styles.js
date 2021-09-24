import styled from "styled-components";
import { device } from "../../../Base/breakpoints";

export const OuterBody = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccd5d8;
  border-radius: 20px;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  @media ${device.xs} {
    width: 21rem;
    height: 8.3rem;
  }
  @media ${device.sm} {
    width: 45rem;
    height: 15rem;
  }
  @media ${device.lg} {
    width: 75rem;
    height: 25rem;
  }
`;
