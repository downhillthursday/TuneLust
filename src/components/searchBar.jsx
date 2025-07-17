// components/SearchBar.jsx
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className=" flex justify-center mt-10 w-full">
      <div className="w-[65%] flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-md">
        <Search className="text-[#c5c8c9] w-5 h-5" />
        <input
          type="text"
          placeholder="Search for tunes, artists, genres..."
          className="w-full bg-transparent text-gray-200 placeholder-[#c5c8c9] focus:outline-none"
        />
      </div>
    </div>
  );
}
