import React, { useContext } from "react";
import { Context } from "../../context/UserContext";

function LogoutIcon() {
  const { logout } = useContext(Context);

  return (
    <button onClick={logout}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7961 0H12.1961C8.99609 0 6.99609 2 6.99609 5.2V9.25H13.2461C13.6561 9.25 13.9961 9.59 13.9961 10C13.9961 10.41 13.6561 10.75 13.2461 10.75H6.99609V14.8C6.99609 18 8.99609 20 12.1961 20H14.7861C17.9861 20 19.9861 18 19.9861 14.8V5.2C19.9961 2 17.9961 0 14.7961 0Z"
          fill="white"
        />
        <path
          d="M2.5575 9.2498L4.6275 7.17984C4.7775 7.02984 4.8475 6.83984 4.8475 6.64984C4.8475 6.45984 4.7775 6.25984 4.6275 6.11984C4.3375 5.82984 3.8575 5.82984 3.5675 6.11984L0.2175 9.4698C-0.0725 9.7598 -0.0725 10.2398 0.2175 10.5298L3.5675 13.8798C3.8575 14.1698 4.3375 14.1698 4.6275 13.8798C4.9175 13.5898 4.9175 13.1098 4.6275 12.8198L2.5575 10.7498H6.9975V9.2498H2.5575Z"
          fill="white"
        />
      </svg>
    </button>
  );
}

export default LogoutIcon;
