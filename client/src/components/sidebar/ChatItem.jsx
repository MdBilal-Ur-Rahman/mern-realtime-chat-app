const ChatItem = ({
  chat,
 selected,
  onSelect,
  setShowSidebar,
}) => {
  const handleClick = () => {
    onSelect(chat);

    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group flex cursor-pointer items-center gap-3 border-b border-slate-800 p-4 transition-all duration-300
      ${
        selected
          ? "bg-cyan-500/15 border-l-4 border-l-cyan-400"
          : "hover:bg-slate-800/80"
      }`}
    >
      {/* Avatar */}
      <div className="relative">
        <img
          src={chat.avatar}
          alt={chat.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-transparent transition-all group-hover:ring-cyan-400"
        />

        {chat.online && (
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#111827] bg-green-500"></span>
        )}
      </div>

      {/* Chat Info */}
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center justify-between">
          <h3 className="truncate font-semibold text-white">
            {chat.name}
          </h3>

          <span className="text-xs text-gray-500">
            {chat.time}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between">
          <p className="truncate text-sm text-gray-400">
            {chat.message}
          </p>

          {chat.unread > 0 && (
            <span className="ml-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-cyan-500 px-2 text-xs font-bold text-white">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;