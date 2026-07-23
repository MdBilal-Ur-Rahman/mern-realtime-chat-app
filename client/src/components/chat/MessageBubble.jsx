import { useMemo, useState } from "react";

import {
  FiCheck,
  FiCheckCircle,
  FiCornerUpLeft,
} from "react-icons/fi";

import MessageMenu from "./MessageMenu";
import ImageBubble from "./ImageBubble";
import ImageViewer from "./ImageViewer";
import ReactionPicker from "./ReactionPicker";
import ReactionBubble from "./ReactionBubble";

const MessageBubble = ({
  message,
  onReply,
  onDelete,
  onForward,
}) => {
  const isMe = message.sender === "me";

  const [menuPosition, setMenuPosition] =
    useState(null);

  const [viewerImage, setViewerImage] =
    useState(null);

  const [
    showReactionPicker,
    setShowReactionPicker,
  ] = useState(false);

  const [reactions, setReactions] =
    useState(message.reactions || []);

  // Image URL (Memory Safe)
  const imageUrl = useMemo(() => {
    if (
      !message.file ||
      !message.file.type?.startsWith("image/")
    ) {
      return null;
    }

    return URL.createObjectURL(message.file);
  }, [message.file]);

  const handleContextMenu = (e) => {
    e.preventDefault();

    setMenuPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        message.text
      );
    } catch (err) {
      console.log(err);
    }

    setMenuPosition(null);
  };

  const handleReply = () => {
    onReply?.(message);
    setMenuPosition(null);
  };

  const handleDelete = () => {
    onDelete?.(message.id);
    setMenuPosition(null);
  };

  const handleForward = () => {
    onForward?.(message);
    setMenuPosition(null);
  };

  const handleReaction = (emoji) => {
    const existing = reactions.find(
      (item) => item.emoji === emoji
    );

    if (existing) {
      setReactions((prev) =>
        prev.map((item) =>
          item.emoji === emoji
            ? {
                ...item,
                count: item.count + 1,
              }
            : item
        )
      );
    } else {
      setReactions((prev) => [
        ...prev,
        {
          emoji,
          count: 1,
        },
      ]);
    }

    setShowReactionPicker(false);
  };

  const renderStatus = () => {
    switch (message.status) {
      case "seen":
        return (
          <FiCheckCircle
            size={14}
            className="text-sky-300"
          />
        );

      case "delivered":
        return (
          <div className="flex -space-x-1">
            <FiCheck size={13} />
            <FiCheck size={13} />
          </div>
        );

      default:
        return <FiCheck size={13} />;
    }
  };
    return (
    <>
      <div
        onContextMenu={handleContextMenu}
        className={`group flex w-full ${
          isMe
            ? "justify-end"
            : "justify-start"
        }`}
      >
        <div
          className="relative"
          onMouseEnter={() =>
            setShowReactionPicker(true)
          }
          onMouseLeave={() =>
            setShowReactionPicker(false)
          }
        >
          {showReactionPicker && (
            <ReactionPicker
              onSelect={handleReaction}
            />
          )}

          {/* Reply Button */}

          <button
            onClick={handleReply}
            className={`
              absolute
              top-2
              ${
                isMe
                  ? "-left-12"
                  : "-right-12"
              }

              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full
              bg-slate-800

              text-gray-300

              opacity-0
              shadow-lg

              transition-all
              duration-200

              group-hover:opacity-100

              hover:bg-cyan-500
              hover:text-white
            `}
          >
            <FiCornerUpLeft size={17} />
          </button>

          {/* Bubble */}

          <div
            className={`
              flex
              flex-col

              max-w-[90%]
              sm:max-w-[80%]
              md:max-w-[70%]
              lg:max-w-[60%]

              rounded-2xl
              px-4
              py-3

              shadow-md

              transition-all
              duration-300

              ${
                isMe
                  ? "rounded-br-md bg-gradient-to-r from-cyan-500 to-cyan-600 text-white"
                  : "rounded-bl-md border border-slate-700 bg-slate-800 text-white"
              }
            `}
          >

            {/* Reply Preview */}

            {message.reply && (
              <div
                className="
                  mb-3
                  rounded-xl
                  border-l-4
                  border-cyan-400
                  bg-black/20
                  px-3
                  py-2
                "
              >
                <p className="text-xs font-semibold text-cyan-300">
                  {message.reply.sender === "me"
                    ? "You"
                    : "Ali"}
                </p>

                <p className="mt-1 line-clamp-2 text-sm opacity-80">
                  {message.reply.text}
                </p>
              </div>
            )}

            {/* Image */}

            {imageUrl && (
              <ImageBubble
                src={imageUrl}
                fileName={message.file.name}
                onOpen={() =>
                  setViewerImage({
                    src: imageUrl,
                    name: message.file.name,
                  })
                }
              />
            )}

            {/* File */}

            {message.file &&
              !imageUrl && (
                <div className="mt-2 rounded-xl bg-black/20 px-4 py-3">

                  <p className="text-sm font-medium">
                    📄 {message.file.name}
                  </p>

                </div>
              )}

            {/* Text */}

            {message.text && (
              <p className="mt-2 break-words whitespace-pre-wrap text-[15px] leading-6">
                {message.text}
              </p>
            )}

            {/* Reactions */}

            <ReactionBubble
              reactions={reactions}
            />

            {/* Footer */}

            <div className="mt-2 flex items-center justify-end gap-1">

              <span className="text-[11px] opacity-70">
                {message.time}
              </span>

              {isMe && renderStatus()}

            </div>

          </div>
        </div>
      </div>
            {/* Context Menu */}

      <MessageMenu
        position={menuPosition}
        onClose={() =>
          setMenuPosition(null)
        }
        onReply={handleReply}
        onCopy={handleCopy}
        onForward={handleForward}
        onDelete={handleDelete}
      />

      {/* Image Viewer */}

      <ImageViewer
        image={viewerImage}
        onClose={() =>
          setViewerImage(null)
        }
      />
    </>
  );
};

export default MessageBubble;