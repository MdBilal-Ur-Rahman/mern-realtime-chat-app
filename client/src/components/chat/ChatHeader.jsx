import {
  FiMenu,
  FiPhone,
  FiVideo,
  FiMoreVertical,
} from "react-icons/fi";

const ChatHeader = ({
  selectedChat,
  setShowSidebar,
}) => {
  if (!selectedChat) return null;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-700 bg-[#111827]/95 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-5 sm:px-7 lg:px-10">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Mobile Menu */}
          <button
            onClick={() => setShowSidebar(true)}
            className="rounded-xl p-2 text-gray-300 transition hover:bg-slate-800 hover:text-white md:hidden"
          >
            <FiMenu size={22} />
          </button>

          {/* Avatar */}
          <div className="relative">
            <img
              src={selectedChat.avatar}
              alt={selectedChat.name}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-slate-700"
            />

            {selectedChat.online && (
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#111827] bg-green-500" />
            )}
          </div>

          {/* Name */}
          <div>
            <h2 className="text-lg font-semibold text-white">
              {selectedChat.name}
            </h2>

            {selectedChat.online ? (
              <p className="flex items-center gap-2 text-sm text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Online
              </p>
            ) : (
              <p className="text-sm text-gray-400">
                last seen today at 10:42 PM
              </p>
            )}
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-2">

          <button className="rounded-xl p-3 text-gray-400 transition-all duration-200 hover:bg-slate-800 hover:text-cyan-400">
            <FiPhone size={20} />
          </button>

          <button className="rounded-xl p-3 text-gray-400 transition-all duration-200 hover:bg-slate-800 hover:text-cyan-400">
            <FiVideo size={20} />
          </button>

          <button className="rounded-xl p-3 text-gray-400 transition-all duration-200 hover:bg-slate-800 hover:text-white">
            <FiMoreVertical size={20} />
          </button>

        </div>

      </div>
    </header>
  );
};

export default ChatHeader;