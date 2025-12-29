export default function LuxuryLoader({ small = false }) {
  return (
    <div className={`${small ? "h-24" : "h-screen"} w-full flex items-center justify-center`}>
      <div className="text-center">
        <div className={`${small ? "w-10 h-10" : "w-16 h-16"} relative mx-auto mb-2`}>
          <div className="absolute inset-0 border-2 border-[#c9a882] border-t-transparent rounded-full animate-spin" />
          <div className="absolute inset-2 border-2 border-[#d0845b] border-b-transparent rounded-full animate-spin-reverse" />
        </div>
        {!small && (
          <p className="text-white/60 font-light tracking-widest text-sm">
            LOADING PRESTIGE
          </p>
        )}
      </div>
    </div>
  );
}