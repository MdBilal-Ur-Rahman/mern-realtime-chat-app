import { useEffect, useRef, useState } from "react";

import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import EmptyChat from "./EmptyChat";
import TypingIndicator from "./TypingIndicator";

import dummyMessage from "../../utils/dummyMessage";

const ChatBody = ({
  selectedChat,
  setShowSidebar,
}) => {
  const [messages, setMessages] = useState([]);

  // Reply State
  const [replyMessage, setReplyMessage] =
    useState(null);

  // Temporary (Socket.io ke baad dynamic hoga)
  const [isTyping] = useState(true);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (selectedChat) {
      setMessages(
        dummyMessage[selectedChat.id] || []
      );

      setReplyMessage(null);
    }
  }, [selectedChat]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isTyping]);

  // Send Message
  const handleSendMessage = ({
    text,
    file,
    reply,
  }) => {
    const newMessage = {
      id: Date.now(),

      sender: "me",

      text,

      file,

      reply,

      reactions: [],

      status: "sent",

      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [
      ...prev,
      newMessage,
    ]);

    setReplyMessage(null);
  };

  // Delete Message
  const handleDeleteMessage = (id) => {
    setMessages((prev) =>
      prev.filter((msg) => msg.id !== id)
    );
  };

  // Forward Message
  const handleForwardMessage = (message) => {
    console.log("Forward:", message);

    // Next Step:
    // Forward Modal Open Hoga
  };

  // Empty Screen
  if (!selectedChat) {
    return <EmptyChat />;
  }

  return (
    <section className="flex h-full min-w-0 flex-1 flex-col bg-[#0b1120]">

      <ChatHeader
        selectedChat={selectedChat}
        setShowSidebar={setShowSidebar}
      />

      <div
        className="flex-1 overflow-y-auto"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-6xl
            flex-col
            px-5
            py-6
            sm:px-8
            md:px-10
            lg:px-14
          "
        >
          <div className="flex flex-col gap-3">
                      {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                onReply={setReplyMessage}
                onDelete={handleDeleteMessage}
                onForward={handleForwardMessage}
              />
            ))}
          </div>

          {/* Typing Indicator */}

          {isTyping && (
            <div className="mt-3">
              <TypingIndicator
                name={selectedChat.name}
              />
            </div>
          )}

          {/* Scroll Bottom */}

          <div
            ref={bottomRef}
            className="h-5"
          />

        </div>
      </div>

      {/* Message Input */}

      <div className="border-t border-slate-700 bg-[#111827]">
        <div className="mx-auto w-full max-w-none px-3 py-2 sm:px-5 lg:px-8">

          <MessageInput
            onSendMessage={handleSendMessage}
            replyMessage={replyMessage}
            setReplyMessage={setReplyMessage}
          />

        </div>
      </div>

    </section>
  );
};

export default ChatBody;