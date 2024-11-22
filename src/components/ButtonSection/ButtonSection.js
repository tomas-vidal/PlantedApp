import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../context/UserContext";
import WaterIcon from "./WaterIcon";
import "./ButtonSection.css";
import Countdown, { zeroPad } from "react-countdown";
import { timestampToDate } from "../../helpers/Helpers";

function ButtonSection() {
  const {
    user,
    plant,
    isLoading,
    createPlant,
    waterPlant,
    dateTimer,
    setDateTimer,
  } = useContext(Context);
  const countdownRef = useRef(null);

  const [timer, setTimer] = useState(false);

  useEffect(() => {
    if (plant != null) {
      setDateTimer(timestampToDate(plant.LastWater));
    }
  }, [plant]);

  useEffect(() => {
    const dateTodayInMs = new Date().getTime();
    const dateFetchedInMs = dateTimer.getTime();

    if (dateTodayInMs - dateFetchedInMs > 864000000) {
      setTimer(false);
    } else {
      setTimer(true);
    }

    if (countdownRef.current != null) {
      countdownRef.current.api.start();
    }
  }, [dateTimer]);

  const handleWatering = (e) => {
    e.preventDefault();
    waterPlant(user.uid).then(() => {
      setDateTimer(new Date());
    });
  };

  const createPlantButton = async (userId) => {
    createPlant(userId);
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

  if (isLoading) return "";

  if (plant == null && user)
    return (
      <section className="buttonSection">
        <button
          className="buttonSection__button--enable"
          onClick={() => createPlantButton(user.uid)}
        >
          Create plant
          <WaterIcon disabled={false} />
        </button>
      </section>
    );

  return (
    <section className="buttonSection">
      <button
        className={
          timer
            ? "buttonSection__button--disable"
            : "buttonSection__button--enable"
        }
        onClick={handleWatering}
        disabled={timer}
      >
        Watering Plant
        <WaterIcon disabled={timer} />
      </button>
      <span className="buttonSection__text">
        <Countdown
          ref={countdownRef}
          daysInHours={true}
          autoStart={false}
          date={dateTimer.getTime() + 864000000}
          renderer={renderer}
          onComplete={() => {
            setTimer(false);
          }}
        />
      </span>
    </section>
  );
}

export default ButtonSection;
