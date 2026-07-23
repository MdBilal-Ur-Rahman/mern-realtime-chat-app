const TypingIndicator = ({ name = "Ali" }) => {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-md border border-slate-700 bg-slate-800 px-5 py-3 shadow-md">

        <p className="mb-2 text-xs font-medium text-cyan-400">
          {name} is typing...
        </p>

        <div className="flex items-center gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:0ms]" />

          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:150ms]" />

          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:300ms]" />
        </div>

      </div>
    </div>
  );
};

export default TypingIndicator;