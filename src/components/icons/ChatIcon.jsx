import React from "react";

const ChatIcon = ({ fill }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.50176 28.125C4.10325 28.1231 3.72174 27.9633 3.44088 27.6806C3.16002 27.3979 3.00274 27.0153 3.00352 26.6168C3.00701 26.4653 3.03065 26.315 3.07383 26.1697L4.15313 22.2656C4.19824 22.1215 4.14727 21.9762 4.08106 21.8613L4.06817 21.8379C4.06348 21.8303 4.04121 21.7992 4.02539 21.7764C4.00957 21.7535 3.99141 21.7289 3.975 21.7049L3.96387 21.6891C2.60107 19.6235 1.87474 17.2033 1.875 14.7287C1.86445 11.3543 3.18457 8.16621 5.59336 5.74746C8.08594 3.2502 11.4199 1.875 14.9895 1.875C18.0176 1.87351 20.9559 2.9035 23.3203 4.79531C25.6318 6.65567 27.2385 9.24844 27.8443 12.1008C28.0308 12.9673 28.1247 13.8512 28.1244 14.7375C28.1244 18.1904 26.7979 21.4336 24.3885 23.8705C21.958 26.3314 18.6943 27.6826 15.1992 27.6826C13.9688 27.6826 12.3943 27.3686 11.6385 27.1553C10.7291 26.901 9.86719 26.5693 9.77227 26.5342C9.67181 26.4957 9.56519 26.4759 9.45762 26.4756C9.34095 26.4749 9.22535 26.4978 9.11778 26.543L9.06797 26.5623L5.11406 27.9908C4.91987 28.0726 4.71234 28.118 4.50176 28.125Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChatIcon;