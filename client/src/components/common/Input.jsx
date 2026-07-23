import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({
  label,
  name,
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  error = "",
  disabled = false,
  required = false,
  autoComplete = "off",
}) => {
  const [showPassword, setShowPassword] =
    useState(false);

  const inputType =
    type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium tracking-wide text-gray-300"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          className={`
            h-14
            w-full
            rounded-2xl
            border
            bg-white/5
            px-5
            pr-14
            text-white
            placeholder:text-gray-500
            backdrop-blur-xl
            transition-all
            duration-300
            outline-none

            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-white/10 focus:border-cyan-500 focus:bg-white/10 focus:ring-2 focus:ring-cyan-500/20"
            }

            ${
              disabled
                ? "cursor-not-allowed opacity-60"
                : ""
            }
          `}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl text-gray-400 transition-all duration-300 hover:bg-white/10 hover:text-cyan-400"
          >
            {showPassword ? (
              <FaEyeSlash size={18} />
            ) : (
              <FaEye size={18} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-2 ml-1 text-sm font-medium text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;