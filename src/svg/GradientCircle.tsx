export default function GradientCircle({ className } : { className?: string }) {
  return (
//     <div className="drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">
//   <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
//     <defs>
//       <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#013220" /> {/* pink-500 */}
//         <stop offset="100%" stopColor="#8A9A5b" /> {/* blue-500 */}
//       </linearGradient>
//     </defs>
//     <circle
//       cx="100"
//       cy="100"
//       r="80"
//       stroke="url(#gradient)"
//       strokeWidth="20"
//       fill="none"
//       strokeLinecap="round"
//     />
//   </svg>
// </div>
    <svg className={className} viewBox="0 0 200 200">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#013220" /> {/* pink-500 */}
          <stop offset="100%" stopColor="#8A9A5b" /> {/* blue-500 */}
        </linearGradient>
      </defs>
      <circle
    cx="100"
    cy="100"
    r="80"
    stroke="url(#gradient)"
    strokeWidth="18"
    fill="none"
    className="blur-md opacity-50"
  />
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="url(#gradient)"
        strokeWidth="13"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}