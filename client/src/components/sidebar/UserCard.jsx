import {
  FiEdit2,
  FiSettings,
} from "react-icons/fi";

const UserCard = () => {
  const user = {
    name: "Md Bilal",
    email: "bilal@gmail.com",
    avatar: "https://i.pravatar.cc/150?img=12",
    online: true,
  };

  return (
    <div className="border-b border-slate-700 bg-[#111827] p-5">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="relative">

            <img
              src={user.avatar}
              alt={user.name}
              className="h-14 w-14 rounded-full object-cover"
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

        <div className="flex items-center gap-2">

          <button className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-700 hover:text-white">
            <FiEdit2 size={18} />
          </button>

          <button className="rounded-lg p-2 text-gray-400 transition hover:bg-slate-700 hover:text-white">
            <FiSettings size={18} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default UserCard;