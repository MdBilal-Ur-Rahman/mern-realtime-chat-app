import {
  FiCopy,
  FiCornerUpLeft,
  FiTrash2,
  FiShare2,
  FiHeart,
} from "react-icons/fi";

const MessageMenu = ({
  position,
  onReply,
  onCopy,
  onForward,
  onDelete,
  onClose,
}) => {
  if (!position) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40"
      />

      {/* Menu */}
      <div
        className="fixed z-50 w-56 overflow-hidden rounded-2xl border border-slate-700 bg-[#1e293b] shadow-2xl"
        style={{
          top: position.y,
          left: position.x,
        }}
      >
        <button
          onClick={onReply}
          className="flex w-full items-center gap-3 px-4 py-3 text-left text-white transition hover:bg-slate-700"
        >
          <FiCornerUpLeft size={18} />
          Reply
        </button>

        <button
          onClick={onCopy}
          className="flex w-full items-center gap-3 px-4 py-3 text-left text-white transition hover:bg-slate-700"
        >
          <FiCopy size={18} />
          Copy
        </button>

        <button
          onClick={onForward}
          className="flex w-full items-center gap-3 px-4 py-3 text-left text-white transition hover:bg-slate-700"
        >
          <FiShare2 size={18} />
          Forward
        </button>

        <button
          className="flex w-full items-center gap-3 px-4 py-3 text-left text-white transition hover:bg-slate-700"
        >
          <FiHeart size={18} />
          React
        </button>

        <button
          onClick={onDelete}
          className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-400 transition hover:bg-red-500/10"
        >
          <FiTrash2 size={18} />
          Delete
        </button>
      </div>
    </>
  );
};

export default MessageMenu;