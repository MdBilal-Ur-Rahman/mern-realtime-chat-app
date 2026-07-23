import {
  FiEdit2,
  FiSettings,
} from "react-icons/fi";

const UserCard = ({ setShowProfile }) => {
  const user = {
    name: "Md Bilal",
    email: "bilal@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    online: true,
  };

  return (
    <div className="border-b border-slate-700 bg-[#111827] p-5">
      <div className="flex items-center justify-between">

        {/* User Info */}
        <div
          onClick={() => setShowProfile(true)}
          className="flex cursor-pointer items-center gap-4 rounded-2xl p-2 transition-all duration-300 hover:bg-white/5"
        >
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-transparent transition-all duration-300 hover:ring-cyan-500"
            />

            {user.online && (
              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#111827] bg-green-500"></span>
            )}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              {user.name}
            </h2>

            <p className="text-sm text-gray-400">
              {user.email}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowProfile(true)}
            className="rounded-xl p-2 text-gray-400 transition hover:bg-slate-700 hover:text-white"
          >
            <FiEdit2 size={18} />
          </button>

          <button className="rounded-xl p-2 text-gray-400 transition hover:bg-slate-700 hover:text-white">
            <FiSettings size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserCard;