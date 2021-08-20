import { useEffect, useState, useRef } from "react";
import styles from "../Base/clock.module.scss";
import { AmBtn } from "./Styles/am_pm/am.styles";
import { PmBtn } from "./Styles/am_pm/pm.styles";
import { TimeSquare } from "./Styles/timeSquare/timeSquare.styles";
import { Divider } from "./Styles/dividers/divider.styles";
import { Point } from "./Styles/dividers/points.styles";
import { TimeDivider } from "./Styles/am_pm/amPmDivider.styles";
import { InnerClock } from "./Styles/clockBody/innerClock.styles";
import { OuterBody } from "./Styles/clockBody/outerClock.styles";

const ClockComponent = () => {
  let FirstHour = new Date().getHours();
  const [hour, setHour] = useState(FirstHour);
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  function refreshClock() {
    if (hour >= 12) {
      setHour(new Date().getHours() - 12);
    } else if (hour === 0) {
      setHour(12);
    } else {
      setHour(new Date().getHours());
    }

    setMin(new Date().getMinutes());
    setSec(new Date().getSeconds());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <>
      <OuterBody>
        <InnerClock>
          <TimeDivider>
            <AmBtn>am</AmBtn>
            <PmBtn>pm</PmBtn>
          </TimeDivider>
          <TimeSquare>{hour.toString()}</TimeSquare>
          <Divider>
            <Point></Point>
            <Point></Point>
          </Divider>
          <TimeSquare>{min.toString()}</TimeSquare>
          <Divider>
            <Point></Point>
          </Divider>
          <TimeSquare>{sec.toString()}</TimeSquare>
        </InnerClock>
      </OuterBody>
    </>
  );
};

export default ClockComponent;
