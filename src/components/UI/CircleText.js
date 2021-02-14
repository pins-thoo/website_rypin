import React from 'react';

const CircleText = () => {
  return (
    <div id="container">
      <div id="circle">
        <svg
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enableBackground="new 0 0 300 300"
          xmlSpace="preserve"
        >
          <defs>
            <path
              id="circlePath"
              d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <circle cx="150" cy="100" r="75" fill="#667c75" />
          <g>
            <use xlinkHref="#circlePath" fill="#667c75" />
            <text fill="#000">
              <textPath xlinkHref="#circlePath">RSVP here</textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CircleText;
