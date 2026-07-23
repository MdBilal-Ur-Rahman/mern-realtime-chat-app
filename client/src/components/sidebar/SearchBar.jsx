import { FiSearch } from "react-icons/fi";

const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <div className="border-b border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl">
      <div className="flex h-12 items-center rounded-2xl border border-white/10 bg-white/5 px-4 transition-all duration-300 focus-within:border-cyan-500 focus-within:bg-white/10 focus-within:ring-2 focus-within:ring-cyan-500/20">
        <FiSearch
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="ml-3 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
        />
      </div>
    </div>
  );
};

export default SearchBar;