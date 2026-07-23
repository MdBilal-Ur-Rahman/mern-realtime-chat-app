import { useState, useRef, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import toast from "react-hot-toast";

import {
  FiSend,
  FiPaperclip,
  FiMic,
  FiSmile,
  FiX,
} from "react-icons/fi";

const MessageInput = ({
  onSendMessage,
  replyMessage,
  setReplyMessage,
}) => {
  const [text, setText] = useState("");

  const [showEmoji, setShowEmoji] =
    useState(false);

  const [selectedFile, setSelectedFile] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const pickerRef = useRef(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(e.target)
      ) {
        setShowEmoji(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  // Cleanup Preview URL
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const onEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);

    if (file.type.startsWith("image/")) {
      setPreview(
        URL.createObjectURL(file)
      );
    } else {
      setPreview("");
    }
  };

  const removeFile = () => {
    setSelectedFile(null);

    setPreview("");

   if (!text.trim() && !selectedFile) {
  toast.error("Please type a message.");
  return;
}
  };

  const handleSend = () => {
    if (!text.trim() && !selectedFile)
      return;

    onSendMessage({
      text: text.trim(),
      reply: replyMessage,
      file: selectedFile,
    });
    toast.success("Message sent successfully!");

    setText("");

    setSelectedFile(null);

    setPreview("");

    setReplyMessage(null);

    setShowEmoji(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="relative w-full py-2">

      {/* Emoji Picker */}

      {showEmoji && (
        <div
          ref={pickerRef}
          className="absolute bottom-20 left-0 z-50"
        >
          <EmojiPicker
            theme="dark"
            width={320}
            height={420}
            onEmojiClick={onEmojiClick}
          />
        </div>
      )}

      {/* Reply Preview */}

      {replyMessage && (
        <div className="mb-3 flex items-start justify-between rounded-2xl border-l-4 border-cyan-500 bg-slate-800 px-4 py-3">

          <div className="min-w-0">

            <p className="text-sm font-semibold text-cyan-400">
              Replying to{" "}
              {replyMessage.sender === "me"
                ? "You"
                : "Ali"}
            </p>

            <p className="mt-1 line-clamp-2 text-sm text-gray-300">
              {replyMessage.text}
            </p>

          </div>

          <button
            onClick={() =>
              setReplyMessage(null)
            }
            className="ml-3 rounded-lg p-2 text-gray-400 transition hover:bg-slate-700 hover:text-red-400"
          >
            <FiX size={18} />
          </button>

        </div>
      )}

      {/* File Preview */}

      {selectedFile && (
        <div className="mb-3 rounded-2xl border border-slate-700 bg-slate-800 p-4">

          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="mb-3 max-h-52 rounded-xl object-cover"
            />
          ) : (
            <div className="text-white">
              📄 {selectedFile.name}
            </div>
          )}

          <button
            onClick={removeFile}
            className="mt-3 flex items-center gap-2 rounded-lg bg-red-500 px-3 py-2 text-sm text-white transition hover:bg-red-600"
          >
            <FiX />
            Remove
          </button>

        </div>
      )}
            {/* Input Bar */}

      <div
        className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-slate-700
          bg-slate-800
          px-5
          py-3
          shadow-lg
          transition-all
          duration-300
          focus-within:border-cyan-500
          focus-within:ring-2
          focus-within:ring-cyan-500/20
        "
      >

        {/* Emoji */}

        <button
          type="button"
          onClick={() =>
            setShowEmoji(!showEmoji)
          }
          className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-700 hover:text-yellow-400"
        >
          <FiSmile size={22} />
        </button>

        {/* Attachment */}

        <input
          ref={fileInputRef}
          type="file"
          hidden
          onChange={handleFileSelect}
        />

        <button
          type="button"
          onClick={() =>
            fileInputRef.current?.click()
          }
          className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-700 hover:text-cyan-400"
        >
          <FiPaperclip size={22} />
        </button>

        {/* Input */}

        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          onKeyDown={handleKeyDown}
          className="
            flex-1
            min-w-0
            bg-transparent
            px-2
            text-[15px]
            text-white
            outline-none
            placeholder:text-gray-500
          "
        />

        {/* Mic */}

        <button
          type="button"
          className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-700 hover:text-green-400"
        >
          <FiMic size={22} />
        </button>

        {/* Send */}

        <button
          type="button"
          onClick={handleSend}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-cyan-500
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:bg-cyan-600
            active:scale-95
          "
        >
          <FiSend size={20} />
        </button>

      </div>

    </div>
  );
};

export default MessageInput;