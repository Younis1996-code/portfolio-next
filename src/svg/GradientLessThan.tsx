// export default function GradientGreaterThan() {
//   return (
//     <svg
//       className="w-20 h-20"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <defs>
//         <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#ec4899" /> {/* pink */}
//           <stop offset="100%" stopColor="#3b82f6" /> {/* blue */}
//         </linearGradient>
//       </defs>
//       <path
//         d="M8 4L18 12L8 20"
//         stroke="url(#grad)"
//         strokeWidth="3"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="none"
//       />
//     </svg>
//   )
// }

// components/TerminalOutlineIcon.tsx
export default function GradientLessThan({ className = "w-20 h-20" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
    <defs>
      <linearGradient id="lessThanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#013220" />
        <stop offset="100%" stopColor="#8A9A5B" />
      </linearGradient>
    </defs>
    <path
      d="M41.5 239L228.5 152c16.8-7.6 36.6 1.7 44.2 18.5s-1.7 36.6-18.5 44.2L115.6 256l138.6 41.2c16.8 7.6 26.1 27.4 18.5 44.2s-27.4 26.1-44.2 18.5L41.5 273c-12.3-5.6-20.2-17.8-20.2-31s7.9-25.4 20.2-31z"
      fill="none"
      stroke="url(#lessThanGrad)"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)};
