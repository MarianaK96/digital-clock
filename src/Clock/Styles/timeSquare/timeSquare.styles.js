import styled from "styled-components";

import { device } from "../../../Base/breakpoints";

export const TimeSquare = styled.div`
  display: flex;
  align-items: center;
  color: #3b3c36;
  display: flex;
  justify-content: center;
  background-color: #ccd5d8;
  border-radius: 15px;
  box-shadow: 9px 7px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(190, 189, 189, 0.3);
  font-family: digitalFont;
  @media ${device.xs} {
    width: 4.3rem;
    height: 5rem;
    font-size: 4rem;

    margin-top: 1rem;
  }

  @media ${device.sm} {
    width: 8.6rem;
    height: 9rem;
    font-size: 7.8rem;

    margin-top: 1.5rem;
  }

  @media ${device.lg} {
    width: 16rem;
    height: 15.5rem;

    margin-top: 2rem;

    font-weight: 600;
    font-size: 13rem;
  }
`;
