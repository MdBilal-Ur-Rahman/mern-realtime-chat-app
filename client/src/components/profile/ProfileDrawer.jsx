import {
  FiX,
  FiCamera,
  FiEdit2,
  FiSettings,
  FiLogOut,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const ProfileDrawer = ({
  open,
  onClose,
}) => {
  const user = {
    name: "Md Bilal",
    email: "bilal@gmail.com",
    phone: "+91 9876543210",
    status: "Available",
    avatar: "https://i.pravatar.cc/200?img=12",
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col border-l border-white/10 bg-[#111827]/95 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">
          <h2 className="text-xl font-bold text-white">
            My Profile
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-gray-400 transition hover:bg-slate-700 hover:text-white"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-32 w-32 rounded-full border-4 border-cyan-500 object-cover"
              />

              <button className="absolute bottom-1 right-1 rounded-full bg-cyan-500 p-3 text-white shadow-lg transition hover:bg-cyan-600">
                <FiCamera />
              </button>
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              {user.name}
            </h2>

            <p className="mt-1 text-gray-400">
              {user.status}
            </p>
          </div>

          {/* Info */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-4">
              <FiMail
                className="text-cyan-400"
                size={20}
              />

              <div>
                <p className="text-xs text-gray-400">
                  Email
                </p>

                <p className="text-white">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-4">
              <FiPhone
                className="text-cyan-400"
                size={20}
              />

              <div>
                <p className="text-xs text-gray-400">
                  Phone
                </p>

                <p className="text-white">
                  {user.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 space-y-3">
            <button className="flex w-full items-center gap-3 rounded-2xl bg-slate-800 p-4 text-white transition hover:bg-slate-700">
              <FiEdit2 />
              Edit Profile
            </button>

            <button className="flex w-full items-center gap-3 rounded-2xl bg-slate-800 p-4 text-white transition hover:bg-slate-700">
              <FiSettings />
              Settings
            </button>

            <button className="flex w-full items-center gap-3 rounded-2xl bg-red-500/20 p-4 text-red-400 transition hover:bg-red-500/30">
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDrawer;