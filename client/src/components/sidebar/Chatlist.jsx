import ChatItem from "./ChatItem";
import dummyChats from "../../utils/dummyChats";

const ChatList = ({
  search,
  selectedChat,
  setSelectedChat,
  setShowSidebar,
}) => {
  const filteredChats = dummyChats.filter((chat) =>
    chat.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="overflow-y-auto">
      {filteredChats.length === 0 ? (
        <div className="py-10 text-center text-gray-400">
          No chats found.
        </div>
      ) : (
        filteredChats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            selected={selectedChat.id === chat.id}
            onSelect={setSelectedChat}
            setShowSidebar={setShowSidebar}
          />
        ))
      )}
    </div>
  );
};

export default ChatList;