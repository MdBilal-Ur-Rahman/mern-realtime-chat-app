import {
  FiUser,
  FiLock,
  FiMoon,
  FiShield,
  FiLogOut,
} from "react-icons/fi";

const menus = [
  {
    id: "profile",
    title: "Profile",
    icon: FiUser,
  },
  {
    id: "account",
    title: "Account",
    icon: FiLock,
  },
  {
    id: "appearance",
    title: "Appearance",
    icon: FiMoon,
  },
  {
    id: "privacy",
    title: "Privacy",
    icon: FiShield,
  },
  {
    id: "logout",
    title: "Logout",
    icon: FiLogOut,
  },
];

const SettingsSidebar = ({
  tab,
  setTab,
}) => {
  return (
    <aside
      className="
        w-72
        border-r
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <h2 className="mb-8 text-2xl font-bold text-white">
        Settings
      </h2>

      <div className="space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() =>
                setTab(item.id)
              }
              className={`
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                transition-all
                duration-300

                ${
                  tab === item.id
                    ? "bg-cyan-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-slate-800"
                }
              `}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default SettingsSidebar;