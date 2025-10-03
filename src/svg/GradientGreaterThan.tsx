import React from "react";

const GradientGreaterThan = ({ className = "w-20 h-20" }) => (
  <svg
    className={className}
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <defs>
      <linearGradient id="greaterThanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8A9A5B" /> {/* green */}
        <stop offset="100%" stopColor="#013220" /> {/* orange */}
      </linearGradient>
    </defs>
    <path
      d="M278.5 239L91.5 152c-16.8-7.6-36.6 1.7-44.2 18.5s1.7 36.6 18.5 44.2L204.4 256 65.8 297.2c-16.8 7.6-26.1 27.4-18.5 44.2s27.4 26.1 44.2 18.5L278.5 273c12.3-5.6 20.2-17.8 20.2-31s-7.9-25.4-20.2-31z"
      fill="none"
      stroke="url(#greaterThanGrad)"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GradientGreaterThan;