import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../context/UserContext";
import { Context as FirebaseContext } from "../../context/FirebaseContext";
import WaterIcon from "./WaterIcon";
import "./ButtonSection.css";
import Countdown, { zeroPad } from "react-countdown";
import { timestampToDate } from "../../helpers/Helpers";

function ButtonSection() {
  const { user, plant, isLoading, plant1 } = useContext(Context);
  const { createPlant, waterPlant } = useContext(FirebaseContext);
  const countdownRef = useRef(null);

  const [timer, setTimer] = useState(true);
  const [dateTimer, setDateTimer] = useState(new Date());
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
      if (!isLoading && plant != null) {
        setDateTimer(timestampToDate(plant.LastWater));
        const dateTodayInMs = new Date().getTime();
      const dateFetchedInMs = dateTimer.getTime();

      if (dateTodayInMs - dateFetchedInMs > 86400000) {
        setTimer(false);
        setButtonDisabled(false);
      } else {
        setTimer(true);
        setButtonDisabled(true);
      }
    }
  }, [plant, isLoading]);

  useEffect(() => {
    if (plant != null) countdownRef.current.api.start();
  }, [dateTimer]);

  const handleWatering = (e) => {
    e.preventDefault();

    if (plant == null) {
      createPlant(user.uid);
    } else {
      waterPlant(user.uid);
    }

    setButtonDisabled(true);
    setDateTimer(new Date());
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <br />;
    } else {
      return (
        <span className="buttonSection__text">
          retry in {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)} secs
        </span>
      );
    }
  };

  if (plant == null) return "";

  return (
    <section className="buttonSection">
      <button
        className={
          timer
            ? "buttonSection__button--disable"
            : "buttonSection__button--enable"
        }
        onClick={handleWatering}
        disabled={buttonDisabled}
      >
        Watering Plant
        <WaterIcon disabled={buttonDisabled} />
      </button>
      <span className="buttonSection__text">
        <Countdown
          ref={countdownRef}
          daysInHours={true}
          autoStart={false}
          date={dateTimer.getTime() + 86400000}
          renderer={renderer}
          onComplete={() => {
            setTimer(false);
            setButtonDisabled(false);
          }}
        />
      </span>
    </section>
  );
}

export default ButtonSection;

// useEffect(() => {
//   const dateToday = new Date();
//   const msInADay = 1000 * 3600 * 24;
//   countdownRef.current.api.start();
//   if (
//     (dateToday.getTime() / 1000 - dateTimer.getTime() / 1000) / 60 >=
//     0.16
//   ) {
//     setTimer(false);
//     setButtonDisabled(false);
//   }
// }, [dateTimer]);
