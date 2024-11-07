import React from "react";
import { useContext } from "react";
import { Context } from "../../context/UserContext";

function PlantIcon() {
  const { plant } = useContext(Context);

  if (plant == null) return "";

  switch (plant.State) {
    case 0:
      return (
        <svg
          width="114"
          height="104"
          viewBox="0 0 114 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8545 90.2956C14.0545 87.8956 12.1878 59.2956 11.3545 45.2956C16.1878 42.129 30.3545 34.8956 48.3545 31.2956C66.3545 27.6956 93.1878 37.7956 104.354 43.2956C103.521 53.629 101.554 76.6956 100.354 86.2956C98.8545 98.2956 101.354 102.796 59.3545 103.296C17.3545 103.796 15.8545 93.2956 14.8545 90.2956Z"
            fill="#CC6244"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M102.069 69.6858C73.1416 70.4753 37.2219 62.2856 11.9281 54.5949C11.7091 51.1538 11.5131 47.9603 11.3545 45.2956C16.1878 42.129 30.3545 34.8956 48.3545 31.2956C66.3545 27.6956 93.1878 37.7956 104.354 43.2956C103.86 49.4313 102.965 60.0563 102.069 69.6858Z"
            fill="#C15233"
          />
          <path
            d="M53.3545 1.79569C69.1878 0.96236 102.355 0.395693 108.355 4.79569C109.521 5.12901 112.854 6.79565 112.854 15.7957C112.854 22.2957 114.855 36.2957 109.855 40.7957C104.855 45.2957 71.8545 47.2957 53.3545 47.2957C34.8545 47.2957 5.35451 48.2957 1.85451 39.2957C-1.64549 30.2957 0.354499 8.79565 3.3545 8.79565C2.3545 4.79569 26.3545 2.34284 53.3545 1.79569Z"
            fill="#CC6244"
          />
          <path
            d="M108.709 4.37309C102.709 -0.0269141 69.5423 0.539753 53.709 1.37309C26.709 1.92024 2.70901 4.37309 3.70901 8.37305C4.70901 12.373 30.709 12.873 53.709 13.373C76.709 13.873 116.209 9.87309 108.709 4.37309Z"
            fill="#CC6244"
          />
          <path
            d="M108.709 4.37309C102.709 -0.0269141 69.5423 0.539753 53.709 1.37309C26.709 1.92024 2.70901 4.37309 3.70901 8.37305C4.70901 12.373 30.709 12.873 53.709 13.373C76.709 13.873 116.209 9.87309 108.709 4.37309Z"
            fill="#CC6244"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M105.961 8.37044C104.78 6.34748 98.6406 5.58075 92.6833 4.83672L92.3545 4.79565C84.3545 3.79565 59.8545 3.79565 32.3545 5.79565C16.6043 6.94111 11.0195 9.17998 9.72897 10.9711C18.7201 12.614 36.305 12.9955 52.6142 13.3493C52.9798 13.3572 53.3448 13.3651 53.709 13.373C70.6196 13.7407 96.4499 11.6757 105.961 8.37044Z"
            fill="#763323"
          />
          <path
            d="M58 6C58 6 58.2082 6 58.5694 6C58.6718 6 59 6 59 6"
            stroke="#44D94D"
            stroke-width="10"
            stroke-linecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg
          width="114"
          height="104"
          viewBox="0 0 114 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8545 90.2956C14.0545 87.8956 12.1878 59.2956 11.3545 45.2956C16.1878 42.129 30.3545 34.8956 48.3545 31.2956C66.3545 27.6956 93.1878 37.7956 104.354 43.2956C103.521 53.629 101.554 76.6956 100.354 86.2956C98.8545 98.2956 101.354 102.796 59.3545 103.296C17.3545 103.796 15.8545 93.2956 14.8545 90.2956Z"
            fill="#CC6244"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M102.069 69.6858C73.1416 70.4753 37.2219 62.2856 11.9281 54.5949C11.7091 51.1538 11.5131 47.9603 11.3545 45.2956C16.1878 42.129 30.3545 34.8956 48.3545 31.2956C66.3545 27.6956 93.1878 37.7956 104.354 43.2956C103.86 49.4313 102.965 60.0563 102.069 69.6858Z"
            fill="#C15233"
          />
          <path
            d="M53.3545 1.79569C69.1878 0.96236 102.355 0.395693 108.355 4.79569C109.521 5.12901 112.854 6.79565 112.854 15.7957C112.854 22.2957 114.855 36.2957 109.855 40.7957C104.855 45.2957 71.8545 47.2957 53.3545 47.2957C34.8545 47.2957 5.35451 48.2957 1.85451 39.2957C-1.64549 30.2957 0.354499 8.79565 3.3545 8.79565C2.3545 4.79569 26.3545 2.34284 53.3545 1.79569Z"
            fill="#CC6244"
          />
          <path
            d="M108.709 4.37309C102.709 -0.0269141 69.5423 0.539753 53.709 1.37309C26.709 1.92024 2.70901 4.37309 3.70901 8.37305C4.70901 12.373 30.709 12.873 53.709 13.373C76.709 13.873 116.209 9.87309 108.709 4.37309Z"
            fill="#CC6244"
          />
          <path
            d="M108.709 4.37309C102.709 -0.0269141 69.5423 0.539753 53.709 1.37309C26.709 1.92024 2.70901 4.37309 3.70901 8.37305C4.70901 12.373 30.709 12.873 53.709 13.373C76.709 13.873 116.209 9.87309 108.709 4.37309Z"
            fill="#CC6244"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M105.961 8.37044C104.78 6.34748 98.6406 5.58075 92.6833 4.83672L92.3545 4.79565C84.3545 3.79565 59.8545 3.79565 32.3545 5.79565C16.6043 6.94111 11.0195 9.17998 9.72897 10.9711C18.7201 12.614 36.305 12.9955 52.6142 13.3493C52.9798 13.3572 53.3448 13.3651 53.709 13.373C70.6196 13.7407 96.4499 11.6757 105.961 8.37044Z"
            fill="#763323"
          />
          <path
            d="M58 6C58 6 58.2082 6 58.5694 6C58.6718 6 59 6 59 6"
            stroke="#44D94D"
            stroke-width="10"
            stroke-linecap="round"
          />
        </svg>
      );
  }
}

export default PlantIcon;