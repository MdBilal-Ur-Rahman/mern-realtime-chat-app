import { FiMenu, FiPhone, FiVideo, FiMoreVertical } from "react-icons/fi";

const ChatHeader = ({
  selectedChat,
  setShowSidebar,
}) => {
  if (!selectedChat) return null;

  return (
    <div className="flex items-center justify-between border-b border-slate-700 bg-[#111827] px-5 py-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowSidebar(true)}
          className="rounded-lg p-2 text-white transition hover:bg-slate-700 md:hidden"
        >
          <FiMenu size={22} />
        </button>

        <img
          src={selectedChat.avatar}
          alt={selectedChat.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h2 className="font-semibold text-white">
            {selectedChat.name}
          </h2>

          <p
            className={`text-sm ${
              selectedChat.online
                ? "text-green-400"
                : "text-gray-400"
            }`}
          >
            {selectedChat.online
              ? "Online"
              : "Last seen recently"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-700 hover:text-white">
          <FiPhone size={18} />
        </button>

        <button className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-700 hover:text-white">
          <FiVideo size={18} />
        </button>

        <button className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-700 hover:text-white">
          <FiMoreVertical size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;