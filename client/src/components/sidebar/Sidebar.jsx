import { useState } from "react";

import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import ChatList from "./ChatList";

const Sidebar = ({
  showSidebar,
  setShowSidebar,
  selectedChat,
  setSelectedChat,
  setShowProfile,
}) => {
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Mobile Overlay */}
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-40
          flex
          w-[360px]
          flex-col
          border-r
          border-white/10
          bg-[#111b21]
          shadow-2xl
          transition-transform
          duration-300

          ${
            showSidebar
              ? "translate-x-0"
              : "-translate-x-full"
          }

          md:relative
          md:translate-x-0
          md:flex-shrink-0
        `}
      >
        {/* User */}
        <UserCard
          setShowProfile={setShowProfile}
        />

        {/* Search */}
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          <ChatList
            search={search}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            setShowSidebar={setShowSidebar}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;