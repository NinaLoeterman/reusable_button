import React from "react";

const LoveIcon = ({ fill }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 26.25C14.6237 26.2495 14.2562 26.1358 13.9453 25.9236C9.34044 22.7977 7.34649 20.6543 6.24669 19.3143C3.90294 16.4578 2.78087 13.5252 2.81251 10.3494C2.84942 6.71016 5.76915 3.75 9.3211 3.75C11.9039 3.75 13.6928 5.20488 14.7346 6.4166C14.7676 6.4546 14.8084 6.48507 14.8541 6.50595C14.8999 6.52683 14.9497 6.53764 15 6.53764C15.0503 6.53764 15.1001 6.52683 15.1459 6.50595C15.1917 6.48507 15.2324 6.4546 15.2654 6.4166C16.3072 5.20371 18.0961 3.75 20.6789 3.75C24.2309 3.75 27.1506 6.71016 27.1875 10.35C27.2191 13.5264 26.0959 16.459 23.7533 19.3148C22.6535 20.6549 20.6596 22.7982 16.0547 25.9242C15.7438 26.1362 15.3763 26.2497 15 26.25V26.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default LoveIcon;