export function SharedWaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute w-full h-full opacity-20"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M 0 700 Q 400 600 800 750 T 1600 700"
          fill="none"
          stroke="rgb(22, 163, 74)"
          strokeWidth="2"
          className="animate-wave"
        />
        <path
          d="M 0 750 Q 300 650 600 800 T 1200 750"
          fill="none"
          stroke="rgb(22, 163, 74)"
          strokeWidth="2"
          className="animate-wave"
          style={{ animationDelay: "0.2s" }}
        />
        <path
          d="M 0 800 Q 400 700 800 850 T 1600 800"
          fill="none"
          stroke="rgb(22, 163, 74)"
          strokeWidth="2"
          className="animate-wave"
          style={{ animationDelay: "0.4s" }}
        />
        <path
          d="M 0 850 Q 300 750 600 900 T 1200 850"
          fill="none"
          stroke="rgb(22, 163, 74)"
          strokeWidth="2"
          className="animate-wave"
          style={{ animationDelay: "0.6s" }}
        />
      </svg>
    </div>
  )
}