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
    <aside
      className={`
        ${
          showSidebar
            ? "translate-x-0"
            : "-translate-x-full"
        }
        fixed left-0 top-0 z-40 h-screen
        w-80 border-r border-slate-700
        bg-[#111827]
        transition-all duration-300
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
  );
};

export default Sidebar;