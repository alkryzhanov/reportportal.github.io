import React from 'react';

export const JiraOneIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
      <path
        fill="#C3C8D5"
        stroke="#2851E3"
        strokeWidth=".1"
        d="M20.4 7.7h-2a4.8 4.8 0 0 1-4.9-4.8h10.8c.5 0 .8.3.8.8v10.7a4.8 4.8 0 0 1-4.7-4.8v-2Z"
      />
      <path
        fill="url(#a)"
        stroke="#3563E9"
        strokeWidth=".1"
        d="M19.8 9.1v10.7A4.8 4.8 0 0 1 15 15v-2h-2a4.8 4.8 0 0 1-4.8-4.8h10.7c.5 0 1 .4 1 1Z"
      />
      <path
        fill="url(#b)"
        d="M13.6 13.5H2.8a5 5 0 0 0 4.9 5h2v1.8c0 2.7 2.1 4.9 4.8 4.9V14.5c0-.5-.4-1-1-1Z"
      />
      <defs>
        <linearGradient id="a" x1="19.6" x2="15.1" y1="8.2" y2="13" gradientUnits="userSpaceOnUse">
          <stop offset=".2" stopColor="#8791AB" />
          <stop offset="1" stopColor="#C3C8D5" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="14.6"
          x2="9.3"
          y1="13.6"
          y2="18.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".2" stopColor="#8791AB" />
          <stop offset="1" stopColor="#C3C8D5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
