const emojis = [
  "👍",
  "❤️",
  "😂",
  "😮",
  "😢",
  "🙏",
];

const ReactionPicker = ({
  onSelect,
}) => {
  return (
    <div
      className="
        absolute
        -top-14
        left-1/2
        -translate-x-1/2

        flex
        items-center
        gap-2

        rounded-full
        border
        border-slate-700

        bg-[#1e293b]

        px-3
        py-2

        shadow-2xl

        animate-in
        fade-in
        zoom-in-95
      "
    >
      {emojis.map((emoji) => (
        <button
          key={emoji}
          onClick={() => onSelect(emoji)}
          className="
            text-2xl
            transition-transform
            duration-200
            hover:scale-125
          "
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default ReactionPicker;