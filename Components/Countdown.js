import React from "react";
import { connect } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

import { Row, Col } from "antd";

const timerProps = {
  isPlaying: true,
  size: 100,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time / 1000) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export class Countdown extends React.Component {
  render() {
    const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = startTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - startTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    return (
      <Row className="countdown-holder" gutter={16}>
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#7E2E84"]]}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime }) =>
              renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000))
            }
          </CountdownCircleTimer>
        </Col>
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#D14081"]]}
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > hourSeconds,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("hours", getTimeHours(daySeconds - elapsedTime / 1000))
            }
          </CountdownCircleTimer>
        </Col>
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#EF798A"]]}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > minuteSeconds,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime(
                "minutes",
                getTimeMinutes(hourSeconds - elapsedTime / 1000)
              )
            }
          </CountdownCircleTimer>
        </Col>
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#218380"]]}
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > 0,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("seconds", getTimeSeconds(elapsedTime))
            }
          </CountdownCircleTimer>
        </Col>
      </Row>
    );
  }
}

export default connect((state) => state)(Countdown);
