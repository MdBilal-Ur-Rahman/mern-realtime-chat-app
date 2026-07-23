import { FiLogOut } from "react-icons/fi";

const LogoutSection = () => {
  const handleLogout = () => {
    console.log("Logout");

    // Future:
    // localStorage.removeItem("token");
    // navigate("/login");
  };

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="text-3xl font-bold">
        Logout
      </h1>

      <p className="mt-2 text-gray-400">
        Sign out from your account securely.
      </p>

      <div
        className="
          mt-8
          rounded-3xl
          border
          border-red-500/30
          bg-slate-900
          p-8
        "
      >

        <div className="flex items-center gap-5">

          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-red-500/20
              text-red-400
            "
          >
            <FiLogOut size={30} />
          </div>

          <div>

            <h2 className="text-xl font-semibold text-white">
              Logout Account
            </h2>

            <p className="mt-1 text-gray-400">
              You will be signed out from this device.
            </p>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="
            mt-8
            flex
            items-center
            gap-2
            rounded-xl
            bg-red-500
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-red-600
          "
        >
          <FiLogOut size={18} />
          Logout
        </button>

      </div>

    </div>
  );
};

export default LogoutSection;