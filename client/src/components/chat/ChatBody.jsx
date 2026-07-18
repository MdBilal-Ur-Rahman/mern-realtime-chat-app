import { useEffect, useRef, useState } from "react";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

import dummyMessage from "../../utils/dummyMessage";

const ChatBody = ({
  selectedChat,
  setShowSidebar,
}) => {
  const [messages, setMessages] = useState([]);

  const bottomRef = useRef(null);

  // Load messages when chat changes
  useEffect(() => {
    if (selectedChat) {
      setMessages(dummyMessage[selectedChat.id] || []);
    }
  }, [selectedChat]);

  // Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      sender: "me",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
    ]);
  };

  return (
    <div className="flex h-screen flex-1 flex-col bg-[#0f172a]">
      <ChatHeader
        selectedChat={selectedChat}
        setShowSidebar={setShowSidebar}
      />

      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

        <div ref={bottomRef}></div>
      </div>

      <MessageInput
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatBody;