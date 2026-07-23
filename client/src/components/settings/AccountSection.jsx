import { useState } from "react";

import {
  FiEye,
  FiEyeOff,
  FiLock,
} from "react-icons/fi";

const AccountSection = () => {
  const [showCurrent, setShowCurrent] =
    useState(false);

  const [showNew, setShowNew] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [passwords, setPasswords] =
    useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSave = () => {
    console.log(passwords);
  };

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="text-3xl font-bold">
        Account Security
      </h1>

      <p className="mt-2 text-gray-400">
        Change your password securely.
      </p>

      <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-8">

        <div className="space-y-5">        {/* Current Password */}

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Current Password
          </label>

          <div className="relative">
            <input
              type={
                showCurrent
                  ? "text"
                  : "password"
              }
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-4
                py-3
                pr-12
                text-white
                outline-none
                focus:border-cyan-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowCurrent(!showCurrent)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showCurrent ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* New Password */}

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            New Password
          </label>

          <div className="relative">
            <input
              type={
                showNew
                  ? "text"
                  : "password"
              }
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-4
                py-3
                pr-12
                text-white
                outline-none
                focus:border-cyan-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowNew(!showNew)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showNew ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}

        <div>
          <label className="mb-2 block text-sm text-gray-300">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={
                showConfirm
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-4
                py-3
                pr-12
                text-white
                outline-none
                focus:border-cyan-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirm(
                  !showConfirm
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showConfirm ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Update Button */}

        <button
          onClick={handleSave}
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-cyan-500
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-cyan-600
          "
        >
          <FiLock size={18} />
          Update Password
        </button>

      </div>

    </div>

  </div>
);

};

export default AccountSection;