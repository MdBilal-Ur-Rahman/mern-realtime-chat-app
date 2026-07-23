const ReactionBubble = ({ reactions = [] }) => {
  if (!reactions.length) return null;

  return (
    <div className="mt-2 flex flex-wrap gap-2">

      {reactions.map((reaction, index) => (
        <div
          key={index}
          className="
            flex
            items-center
            gap-1
            rounded-full
            border
            border-slate-700
            bg-slate-800
            px-2
            py-1
            text-sm
            shadow
          "
        >
          <span>{reaction.emoji}</span>

          <span className="text-xs text-gray-300">
            {reaction.count}
          </span>
        </div>
      ))}

    </div>
  );
};

export default ReactionBubble;