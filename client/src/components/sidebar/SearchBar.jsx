import { FiSearch } from "react-icons/fi";

const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <div className="p-4">
      <div className="flex items-center rounded-xl bg-slate-800 px-4 py-3">

        <FiSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="ml-3 w-full bg-transparent text-white outline-none placeholder:text-gray-500"
        />

      </div>
    </div>
  );
};

export default SearchBar;