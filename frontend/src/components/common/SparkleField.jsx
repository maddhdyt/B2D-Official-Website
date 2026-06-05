const sparkles = [
  "top-[15%] left-[30%] w-4 h-4 text-gray-500/40 animate-pulse",
  "top-[25%] left-[20%] w-6 h-6 text-gray-500/40",
  "top-[35%] left-[8%] w-4 h-4 text-gray-500/30 animate-pulse",
  "top-[55%] left-[12%] w-5 h-5 text-gray-500/30",
  "bottom-[35%] left-[22%] w-3 h-3 text-gray-500/50 animate-pulse",
  "bottom-[20%] left-[10%] w-5 h-5 text-gray-500/30",
  "top-[12%] right-[25%] w-4 h-4 text-gray-500/30 animate-pulse",
  "top-[28%] right-[10%] w-3 h-3 text-gray-500/50",
  "top-[40%] right-[15%] w-4 h-4 text-gray-500/30",
  "bottom-[55%] right-[28%] w-6 h-6 text-gray-500/40 animate-pulse",
  "bottom-[45%] right-[18%] w-5 h-5 text-gray-500/30",
  "bottom-[30%] right-[8%] w-6 h-6 text-gray-500/30 animate-pulse",
];

export default function SparkleField() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      {sparkles.map((className, index) => (
        <svg
          key={className}
          className={`absolute ${className}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" />
        </svg>
      ))}
    </div>
  );
}
