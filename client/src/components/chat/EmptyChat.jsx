import { FiMessageCircle } from "react-icons/fi";

const EmptyChat = () => {
  return (
    <div className="flex h-full flex-1 items-center justify-center bg-[#0b1120]">

      <div className="text-center">

        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500/10">
          <FiMessageCircle
            size={60}
            className="text-cyan-400"
          />
        </div>

        <h2 className="text-3xl font-bold text-white">
          Welcome to ChatApp
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-400">
          Select a conversation from the sidebar to start chatting.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Your messages are private and secure.
        </p>

      </div>

    </div>
  );
};

export default EmptyChat;