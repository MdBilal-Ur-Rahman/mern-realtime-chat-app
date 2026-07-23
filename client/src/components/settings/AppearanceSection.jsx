import { useState } from "react";

import {
  FiMoon,
  FiSun,
  FiSave,
} from "react-icons/fi";

const colors = [
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

const AppearanceSection = () => {
  const [darkMode, setDarkMode] =
    useState(true);

  const [compactMode, setCompactMode] =
    useState(false);

  const [accent, setAccent] =
    useState(colors[0]);

  const handleSave = () => {
    console.log({
      darkMode,
      compactMode,
      accent,
    });
  };

  return (
    <div className="mx-auto max-w-3xl">

      <h1 className="text-3xl font-bold">
        Appearance
      </h1>

      <p className="mt-2 text-gray-400">
        Customize the look and feel of your chat.
      </p>

      <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-8">

        <div className="space-y-8">
                    {/* Dark Mode */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-white">
                Dark Mode
              </h3>

              <p className="text-sm text-gray-400">
                Enable dark theme.
              </p>

            </div>

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`
                flex
                items-center
                gap-2
                rounded-xl
                px-5
                py-2
                transition

                ${
                  darkMode
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-700 text-gray-300"
                }
              `}
            >
              {darkMode ? (
                <FiMoon />
              ) : (
                <FiSun />
              )}

              {darkMode
                ? "Enabled"
                : "Disabled"}
            </button>

          </div>

          {/* Compact Mode */}

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold text-white">
                Compact Chat
              </h3>

              <p className="text-sm text-gray-400">
                Reduce spacing in chat.
              </p>

            </div>

            <button
              onClick={() =>
                setCompactMode(!compactMode)
              }
              className={`
                rounded-xl
                px-5
                py-2
                transition

                ${
                  compactMode
                    ? "bg-cyan-500 text-white"
                    : "bg-slate-700 text-gray-300"
                }
              `}
            >
              {compactMode
                ? "Enabled"
                : "Disabled"}
            </button>

          </div>

          {/* Accent Color */}

          <div>

            <h3 className="font-semibold text-white">
              Accent Color
            </h3>

            <p className="mb-4 text-sm text-gray-400">
              Choose your favorite color.
            </p>

            <div className="flex flex-wrap gap-4">

              {colors.map((color) => (

                <button
                  key={color}
                  onClick={() =>
                    setAccent(color)
                  }
                  style={{
                    background: color,
                  }}
                  className={`
                    h-10
                    w-10
                    rounded-full
                    transition

                    ${
                      accent === color
                        ? "scale-110 ring-4 ring-white"
                        : ""
                    }
                  `}
                />

              ))}

            </div>

          </div>

          {/* Save */}

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
            Save Preferences
          </button>

        </div>

      </div>

    </div>
  );
};

export default AppearanceSection;