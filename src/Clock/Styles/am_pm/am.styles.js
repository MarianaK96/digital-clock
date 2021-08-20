import styled from "styled-components";
import { size, device } from "../../../Base/breakpoints";

export const AmBtn = styled.div`
  opacity: ${() => (new Date().getHours() < 12 ? "1" : "0.5")};
  background-color: #ccd5d8;
  border-radius: 15px;
  box-shadow: 9px 7px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(190, 189, 189, 0.3);
  display: flex;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  font-weight: 600;
  align-items: center;
  color: #3b3c36;
  @media ${device.xs} {
    width: 1.6rem;
    height: 1rem;
    font-size: 0.5rem;
  }

  @media ${device.sm} {
    width: 3rem;
    height: 1.8rem;

    font-size: 0.6rem;
  }
  @media ${device.lg} {
    width: 5rem;
    height: 3rem;

    font-size: 1rem;
  }
`;

//media queries not working here
