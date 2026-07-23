import { useState } from "react";

import {
  FiCamera,
  FiBell,
  FiMoon,
  FiShield,
  FiLock,
  FiLogOut,
  FiSave,
} from "react-icons/fi";

import toast from "react-hot-toast";

const Settings = () => {
  const [preview, setPreview] =
    useState("");

  const [image, setImage] =
    useState(null);

  const [darkMode, setDarkMode] =
    useState(true);

  const [
    notifications,
    setNotifications,
  ] = useState(true);

  const [privacy, setPrivacy] =
    useState(true);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );

    toast.success(
      "Profile photo updated!"
    );
  };

  const handleSave = () => {
    console.log({
      image,
      darkMode,
      notifications,
      privacy,
    });

    toast.success(
      "Settings saved successfully!"
    );
  };

  return (
    <section className="min-h-screen bg-[#020617]">

      <div
        className="
          mx-auto
          max-w-6xl
          px-6
          py-10
          lg:px-10
        "
      >

        {/* Heading */}

        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your account preferences.
        </p>

        {/* Profile Card */}

        <div
          className="
            mt-10
            rounded-3xl
            border
            border-slate-700
            bg-slate-900
            px-10
            py-8
            shadow-xl
          "
        >

          <div
            className="
              flex
              items-center
              gap-8
            "
          >

            {/* Avatar */}

            <label className="relative cursor-pointer">

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImage}
              />

              <div
                className="
                  flex
                  h-32
                  w-32
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border-2
                  border-dashed
                  border-cyan-500
                  bg-slate-800
                "
              >

                {preview ? (
                  <img
                    src={preview}
                    alt="profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <FiCamera
                    size={38}
                    className="text-cyan-400"
                  />
                )}

              </div>

            </label>

            {/* User Info */}

            <div className="space-y-2">

              <h2 className="text-3xl font-bold text-white">
                Muhammad Ali
              </h2>

              <p className="text-lg text-gray-400">
                ali@example.com
              </p>

            </div>

          </div>

        </div>
                {/* Preferences Card */}

        <div
          className="
            mt-8
            rounded-3xl
            border
            border-slate-700
            bg-slate-900
            px-10
            py-8
            shadow-xl
          "
        >

          {/* Dark Mode */}

          <div className="flex items-center justify-between py-6 border-b border-slate-700">

            <div className="flex items-center gap-5">

              <FiMoon
                size={26}
                className="text-cyan-400"
              />

              <div className="space-y-1">

                <h3 className="text-xl font-semibold text-white">
                  Dark Mode
                </h3>

                <p className="text-gray-400">
                  Enable dark theme
                </p>

              </div>

            </div>

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`h-8 w-16 rounded-full transition ${
                darkMode
                  ? "bg-cyan-500"
                  : "bg-slate-600"
              }`}
            >
              <div
                className={`h-7 w-7 rounded-full bg-white transition ${
                  darkMode
                    ? "translate-x-8"
                    : "translate-x-1"
                }`}
              />
            </button>

          </div>

          {/* Notifications */}

          <div className="flex items-center justify-between py-6 border-b border-slate-700">

            <div className="flex items-center gap-5">

              <FiBell
                size={26}
                className="text-cyan-400"
              />

              <div className="space-y-1">

                <h3 className="text-xl font-semibold text-white">
                  Notifications
                </h3>

                <p className="text-gray-400">
                  Receive new message alerts
                </p>

              </div>

            </div>

            <button
              onClick={() =>
                setNotifications(
                  !notifications
                )
              }
              className={`h-8 w-16 rounded-full transition ${
                notifications
                  ? "bg-cyan-500"
                  : "bg-slate-600"
              }`}
            >
              <div
                className={`h-7 w-7 rounded-full bg-white transition ${
                  notifications
                    ? "translate-x-8"
                    : "translate-x-1"
                }`}
              />
            </button>

          </div>

          {/* Privacy */}

          <div className="flex items-center justify-between py-6 border-b border-slate-700">

            <div className="flex items-center gap-5">

              <FiShield
                size={26}
                className="text-cyan-400"
              />

              <div className="space-y-1">

                <h3 className="text-xl font-semibold text-white">
                  Privacy
                </h3>

                <p className="text-gray-400">
                  Keep your account private
                </p>

              </div>

            </div>

            <button
              onClick={() =>
                setPrivacy(!privacy)
              }
              className={`h-8 w-16 rounded-full transition ${
                privacy
                  ? "bg-cyan-500"
                  : "bg-slate-600"
              }`}
            >
              <div
                className={`h-7 w-7 rounded-full bg-white transition ${
                  privacy
                    ? "translate-x-8"
                    : "translate-x-1"
                }`}
              />
            </button>

          </div>

          {/* Security */}

          <div className="flex items-center justify-between py-6">

            <div className="flex items-center gap-5">

              <FiLock
                size={26}
                className="text-cyan-400"
              />

              <div className="space-y-1">

                <h3 className="text-xl font-semibold text-white">
                  Security
                </h3>

                <p className="text-gray-400">
                  Change your password
                </p>

              </div>

            </div>

            <button
              className="
                min-w-[220px]
                rounded-xl
                bg-cyan-500
                px-8
                py-4
                font-semibold
                text-lg
                text-white
                transition-all
                duration-300
                hover:bg-cyan-600
                hover:scale-105
              "
            >
              Change Password
            </button>

          </div>

        </div>
                {/* Action Buttons */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            md:flex-row
          "
        >

          {/* Save Settings */}

          <button
            onClick={handleSave}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-cyan-500
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-cyan-600
            "
          >
            <FiSave size={22} />

            Save Settings

          </button>

          {/* Logout */}

          <button
            onClick={() => {
              toast.success("Logged out!");

              // Future
              // localStorage.removeItem("token");
              // navigate("/login");
            }}
            className="
              flex
              flex-1
              items-center
              justify-center
              gap-3
              rounded-2xl
              border-2
              border-red-500
              px-8
              py-4
              text-lg
              font-semibold
              text-red-400
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-red-500
              hover:text-white
            "
          >
            <FiLogOut size={22} />

            Logout

          </button>

        </div>

      </div>

    </section>
  );
};

export default Settings;