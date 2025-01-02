export function WaveBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-20 dark:opacity-10"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" />
              <stop offset="100%" stopColor="rgb(16, 185, 129)" />
            </linearGradient>
          </defs>
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={i}
              d={`M ${-200 + i * 50} ${800 - i * 50} C ${400 + i * 50} ${
                600 - i * 50
              }, ${600 + i * 50} ${400 - i * 50}, ${1200 + i * 50} ${
                200 - i * 50
              }`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="1"
              className="animate-wave"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>
    );
  }