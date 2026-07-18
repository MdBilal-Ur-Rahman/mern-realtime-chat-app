import { useState } from "react";

import {
  FiSend,
  FiPaperclip,
  FiMic,
  FiSmile,
} from "react-icons/fi";

const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSendMessage(text);

    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-slate-700 bg-[#111827] p-4">

      <div className="flex items-center gap-3 rounded-2xl bg-slate-800 px-4 py-3">

        <button
          type="button"
          className="text-gray-400 transition hover:text-yellow-400"
        >
          <FiSmile size={22} />
        </button>

        <button
          type="button"
          className="text-gray-400 transition hover:text-cyan-400"
        >
          <FiPaperclip size={22} />
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-white placeholder:text-gray-500 outline-none"
        />

        <button
          type="button"
          className="text-gray-400 transition hover:text-green-400"
        >
          <FiMic size={22} />
        </button>

        <button
          type="button"
          onClick={handleSend}
          className="rounded-xl bg-cyan-500 p-3 text-white transition hover:bg-cyan-600"
        >
          <FiSend size={20} />
        </button>

      </div>

    </div>
  );
};

export default MessageInput;