import { FiCheck, FiCheckCircle } from "react-icons/fi";

const MessageBubble = ({ message }) => {
  const isMe = message.sender === "me";

  return (
    <div
      className={`mb-3 flex ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-md transition-all duration-300 ${
          isMe
            ? "rounded-br-md bg-cyan-500 text-white"
            : "rounded-bl-md bg-slate-700 text-white"
        }`}
      >
        <p className="break-words">{message.text}</p>

        <div className="mt-2 flex items-center justify-end gap-1">
          <span className="text-xs opacity-70">
            {message.time}
          </span>

          {isMe && (
            <FiCheckCircle
              size={14}
              className="text-blue-200"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;