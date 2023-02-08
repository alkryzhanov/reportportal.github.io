import React from 'react';

export const JiraTwoIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none">
      <path
        fill="#C3C8D5"
        d="m25 13.7-10-10-1-.9-11 11A1 1 0 0 0 3 15l7 6.9 4 4L25 15c.3-.3.3-1 0-1.3Zm-11 4.1-3.4-3.4L14 11l3.4 3.4-3.4 3.4Z"
      />
      <path fill="url(#a)" d="M14 11a5.8 5.8 0 0 1 0-8.2l-7.5 7.5 4 4L14 11Z" />
      <path fill="url(#b)" d="M17.4 14.4 14 17.8a5.8 5.8 0 0 1 0 8.2l7.5-7.6-4-4Z" />
      <defs>
        <linearGradient id="a" x1="12.5" x2="8.6" y1="8.4" y2="12.3" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8791AB" />
          <stop offset="1" stopColor="#C3C8D5" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="15.5"
          x2="19.4"
          y1="20.4"
          y2="16.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8791AB" />
          <stop offset="1" stopColor="#C3C8D5" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
