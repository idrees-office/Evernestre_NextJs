export function inputClass(hasError?: string) {
  return [
    "w-full rounded-sm px-4 py-2 text-[15px] border transition-all duration-300 cursor-pointer",
    "focus:outline-none focus:border-[#c97a52] focus:scale-[1.02]",
    hasError ? "border-red-400 focus:border-red-400" : "border-gray-300",
  ].join(" ");
}
