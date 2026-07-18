import { useState } from "react";

import UserCard from "./UserCard";
import SearchBar from "./SearchBar";
import ChatList from "./ChatList";

const Sidebar = ({
  showSidebar,
  setShowSidebar,
  selectedChat,
  setSelectedChat,
}) => {
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Mobile Overlay */}
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(false)}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-40
          flex h-screen w-80 flex-col
          border-r border-slate-700
          bg-[#111827]
          transition-transform duration-300
          ${
            showSidebar
              ? "translate-x-0"
              : "-translate-x-full"
          }
          md:relative md:translate-x-0
        `}
      >
        <UserCard />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

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