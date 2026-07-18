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
      className={`flex cursor-pointer items-center gap-3 border-b border-slate-800 p-4 transition
      ${
        selected
          ? "bg-slate-800"
          : "hover:bg-slate-800"
      }`}
    >
      <img
        src={chat.avatar}
        alt={chat.name}
        className="h-12 w-12 rounded-full object-cover"
      />

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white">
            {chat.name}
          </h3>

          <span className="text-xs text-gray-500">
            {chat.time}
          </span>
        </div>

        <p className="truncate text-sm text-gray-400">
          {chat.message}
        </p>
      </div>
    </div>
  );
};

export default ChatItem;