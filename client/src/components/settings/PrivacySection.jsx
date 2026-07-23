import { useState } from "react";

import {
  FiShield,
  FiSave,
} from "react-icons/fi";

const PrivacySection = () => {
  const [privacy, setPrivacy] =
    useState({
      lastSeen: true,
      readReceipts: true,
      allowCalls: true,
      profilePhoto: "everyone",
    });

  const handleToggle = (key) => {
    setPrivacy((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleChange = (e) => {
    setPrivacy((prev) => ({
      ...prev,
      profilePhoto: e.target.value,
    }));
  };

  const handleSave = () => {
    console.log(privacy);
  };

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="text-3xl font-bold">
        Privacy
      </h1>

      <p className="mt-2 text-gray-400">
        Control who can see your information.
      </p>

      <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-8">

        <div className="space-y-8">
                    {/* Last Seen */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-white">
                Last Seen
              </h3>

              <p className="text-sm text-gray-400">
                Show your last seen to others.
              </p>

            </div>

            <button
              onClick={() =>
                handleToggle("lastSeen")
              }
              className={`
                rounded-xl
                px-5
                py-2
                transition

                ${
                  privacy.lastSeen
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-700 text-gray-300"
                }
              `}
            >
              {privacy.lastSeen
                ? "Enabled"
                : "Disabled"}
            </button>

          </div>

          {/* Read Receipts */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-white">
                Read Receipts
              </h3>

              <p className="text-sm text-gray-400">
                Let people know when you've read messages.
              </p>

            </div>

            <button
              onClick={() =>
                handleToggle("readReceipts")
              }
              className={`
                rounded-xl
                px-5
                py-2
                transition

                ${
                  privacy.readReceipts
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-700 text-gray-300"
                }
              `}
            >
              {privacy.readReceipts
                ? "Enabled"
                : "Disabled"}
            </button>

          </div>

          {/* Allow Calls */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-white">
                Voice & Video Calls
              </h3>

              <p className="text-sm text-gray-400">
                Allow users to call you.
              </p>

            </div>

            <button
              onClick={() =>
                handleToggle("allowCalls")
              }
              className={`
                rounded-xl
                px-5
                py-2
                transition

                ${
                  privacy.allowCalls
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-700 text-gray-300"
                }
              `}
            >
              {privacy.allowCalls
                ? "Enabled"
                : "Disabled"}
            </button>

          </div>

          {/* Profile Photo */}

          <div>

            <h3 className="mb-2 font-semibold text-white">
              Profile Photo Visibility
            </h3>

            <select
              value={privacy.profilePhoto}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-500
              "
            >
              <option value="everyone">
                Everyone
              </option>

              <option value="contacts">
                My Contacts
              </option>

              <option value="nobody">
                Nobody
              </option>

            </select>

          </div>

          {/* Save Button */}

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
            <FiSave size={18} />
            Save Privacy Settings
          </button>

        </div>

      </div>

    </div>
  );
};

export default PrivacySection;