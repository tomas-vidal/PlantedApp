import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/UserContext";
import "./Header.css";
import LogoutIcon from "./LogoutIcon";
import EditIcon from "./EditIcon";
import FlameIcon from "./FlameIcon";
import ReactModal from "react-modal";
import { onlyLetters } from "../../helpers/Helpers";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const { user, plant, isLoading, changeNamePlant } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input != "" && onlyLetters(input)) {
      changeNamePlant(user.uid, input);
      setOpenModal(false);
    }
    setError(true);
  };

  useEffect(() => {
    setError(false);
  }, [openModal]);

  return (
    <header>
      <ReactModal
        ariaHideApp={false}
        style={{
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "150px",
          },
        }}
        isOpen={openModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <form>
          <div className="modalForm">
            <button
              className="modalForm__closeBtn"
              onClick={() => setOpenModal(false)}
            >
              x
            </button>
            <input
              className={`modalForm__input ${
                error ? "modalForm__input--error" : "modalForm__input--correct"
              }`}
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="modalForm__button"
              type="sumbit"
              onClick={(e) => handleSubmit(e)}
            >
              Change
            </button>
          </div>
          <p
            className={`modalForm__text ${
              error ? "modalForm__text--error" : "modalForm__text--correct"
            }`}
          >
            Please write a name only with letters of the alphabet.
          </p>
        </form>
      </ReactModal>
      <section className="headerApp">
        {!isLoading && <LogoutIcon />}
        <h1 className="headerApp__plantName">
          {plant != null ? plant.Name : ""}
        </h1>
        {!isLoading && (
          <EditIcon setOpenModal={setOpenModal} openModal={openModal} />
        )}
      </section>
      <div className="headerStreak">
        {plant && (
          <>
            <div className="headerStreak__section">
              <h2 className="headerStreak__number">{plant.Streak}</h2>
              <FlameIcon />
            </div>
            <p className="headerStreak__text">day streak</p>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
