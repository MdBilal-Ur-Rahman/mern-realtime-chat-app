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
      className={`group mx-3 my-2 flex cursor-pointer items-center gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 ${
        selected
          ? "border-cyan-400/30 bg-cyan-500/15 shadow-lg shadow-cyan-500/10"
          : "border-transparent hover:border-white/10 hover:bg-white/5"
      }`}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <img
          src={chat.avatar}
          alt={chat.name}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-transparent transition-all duration-300 group-hover:ring-cyan-500"
        />

        {chat.online && (
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#0f172a] bg-green-500"></span>
        )}
      </div>

      {/* Chat Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-[17px] font-semibold text-white">
            {chat.name}
          </h3>

          <span className="flex-shrink-0 text-xs font-medium text-gray-500">
            {chat.time}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-3">
          <p className="truncate text-sm text-gray-400">
            {chat.message}
          </p>

          {chat.unread > 0 && (
            <span className="ml-2 flex h-6 min-w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/30">
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;