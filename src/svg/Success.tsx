import React from 'react'

const Success = () => {
  return (
    <svg
          className="w-[9.25vw] h-[9.25vw] md:w-[7.25vw] md:h-[7.25vw] lg:w-[4.1667vw] lg:h-[4.1667vw] text-Green-75"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12.5l3 3 5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
  )
}

export default Success
