import { useState, useEffect } from "react";
import styles from "../Base/clock.module.scss";
import { AmBtn } from "./Styles/am_pm/am.styles";
import { PmBtn } from "./Styles/am_pm/pm.styles";
import { TimeSquare } from "./Styles/timeSquare/timeSquare.styles";
import { Divider } from "./Styles/dividers/divider.styles";
import { Point } from "./Styles/dividers/points.styles";
import { TimeDivider } from "./Styles/am_pm/amPmDivider.styles";
import { InnerClock } from "./Styles/clockBody/innerClock.styles";
import { OuterBody } from "./Styles/clockBody/outerClock.styles";

const { DateTime } = require("luxon");

const ClockComponent = () => {
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  function refreshClock() {
    setHour(DateTime.now().toFormat("h"));
    setMin(DateTime.now().toFormat("mm"));
    setSec(DateTime.now().toFormat("ss"));
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
