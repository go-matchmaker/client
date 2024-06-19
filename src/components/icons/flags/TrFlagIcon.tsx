import React, { FC, SVGProps } from "react";

const TrFlagIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="62.5"
      height="62.5"
      viewBox="0 0 62.5 62.5"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
      fill="#000000"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <circle cx="32" cy="32" r="30" fill="#ff0019"></circle>
        <g fill="#ffffff">
          <path d="M41.3 39l.1-5.4L36 32l5.4-1.6l-.1-5.4l3.3 4.3l5.4-1.6l-3.3 4.3l3.3 4.3l-5.4-1.6z"></path>
          <path d="M33.2 44c-6.6 0-11.9-5.4-11.9-12s5.3-12 11.9-12c2.5 0 4.8.8 6.8 2.1C37.3 19 33.3 17 28.8 17C20.6 17 14 23.7 14 32s6.6 15 14.8 15c4.5 0 8.5-2 11.2-5.1c-1.9 1.3-4.2 2.1-6.8 2.1"></path>
        </g>
      </g>
    </svg>
  );
};

export default TrFlagIcon;
