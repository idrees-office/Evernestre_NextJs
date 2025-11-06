import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <div className="flex justify-center mb-12">
      <motion.form
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 150 }}
        className="flex items-center w-full max-w-4xl bg-white rounded-xl shadow-[0_0_25px_rgba(139,93,59,0.25)] ring-1 ring-[#d4a373]/40 overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search Developers..."
          className="flex-1 px-6 py-3 text-[15px] focus:outline-none text-[#3c2f26] placeholder-[#8b5d3b]/70 bg-[#fffaf5] shadow-inner shadow-[0_0_15px_rgba(139,93,59,0.2)]"
        />

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 25px rgba(139,93,59,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          type="submit"
          className="bg-gradient-to-r from-[#8b5d3b] via-[#b06c48] to-[#d4a373] hover:opacity-95 flex items-center justify-center px-6 py-3 text-white font-semibold text-sm shadow-[0_8px_25px_rgba(139,93,59,0.35)] transition-all duration-300 rounded-r-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.15-4.65A7 7 0 1110 3a7 7 0 018 8z"
            />
          </svg>
        </motion.button>
      </motion.form>
    </div>
  );
}
