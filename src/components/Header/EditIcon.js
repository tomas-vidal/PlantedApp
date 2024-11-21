import React from "react";

function EditIcon({ setOpenModal, openModal }) {
  return (
    <button onClick={() => setOpenModal(!openModal)}>
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.1542 1.33452L18.1665 3.34684C19.2779 4.45822 19.2779 6.26012 18.1665 7.3715L16.456 9.08202L10.419 3.04503L12.1295 1.33452C13.2409 0.22313 15.0428 0.22313 16.1542 1.33452ZM9.41284 4.05119L1.70298 11.761C1.24454 12.2195 0.956377 12.8207 0.886179 13.4652L0.512413 16.8971C0.381143 18.1024 1.39861 19.1199 2.60391 18.9886L6.03576 18.6148C6.68029 18.5446 7.28152 18.2565 7.73994 17.798L15.4498 10.0881L9.41284 4.05119Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export default EditIcon;
