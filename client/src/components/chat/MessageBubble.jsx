const MessageBubble = ({ message }) => {
  const isMe = message.sender === "me";

  return (
    <div
      className={`flex ${
        isMe
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 shadow-lg ${
          isMe
            ? "bg-cyan-500 text-white"
            : "bg-slate-700 text-white"
        }`}
      >
        <p>{message.text}</p>

        <p className="mt-2 text-right text-xs opacity-70">
          {message.time}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;