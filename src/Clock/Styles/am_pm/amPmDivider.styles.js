import styled from "styled-components";
import { size, device } from "../../../Base/breakpoints";

export const TimeDivider = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${device.xs} {
    width: 1.6rem;
    height: 5.6rem;
    margin-top: 0.7rem;
  }

  @media ${device.sm} {
    width: 3rem;
    height: 10.2rem;
    margin-top: 0.7rem;
  }

  @media ${device.lg} {
    width: 5rem;
    height: 17rem;
    margin-top: 1.5rem;
  }
`;
