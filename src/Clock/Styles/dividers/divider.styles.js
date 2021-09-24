import styled from "styled-components";
import { device } from "../../../Base/breakpoints";

export const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${device.xs} {
    width: 0.5rem;
    height: 5.6rem;
    margin-top: 0.7rem;
  }

  @media ${device.sm} {
    width: 0.9rem;
    height: 10.2rem;
    margin-top: 1rem;
  }

  @media ${device.lg} {
    margin-top: 1.5rem;
    width: 1.5rem;
    height: 17rem;
  }
`;
