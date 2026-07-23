import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiEye,
  FiEyeOff,
  FiCamera,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [formData, setFormData] =
    useState({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error(
        "Please fill all fields."
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      toast.error(
        "Passwords do not match."
      );
      return;
    }

    try {
      setLoading(true);

      console.log(formData);
      console.log(image);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast.success(
        "Account Created Successfully!"
      );

      // Future:
      // navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error(
        "Registration Failed!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        w-full
        max-w-xl
        rounded-3xl
        border
        border-slate-700
        bg-slate-900
        p-8
        shadow-2xl
      "
    >
      <h2 className="text-3xl font-bold text-white">
        Create Account
      </h2>

      <p className="mt-2 text-gray-400">
        Join our secure chat platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
                {/* Avatar */}

        <div className="flex justify-center">
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
                h-28
                w-28
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
                  alt="avatar"
                  className="h-full w-full object-cover"
                />
              ) : (
                <FiCamera
                  size={34}
                  className="text-cyan-400"
                />
              )}
            </div>

          </label>
        </div>

        {/* Full Name */}

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
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
        />

        {/* Username */}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
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
        />

        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
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
        />

        {/* Password */}

        <div className="relative">

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            name="password"
            placeholder="Password"
            value={formData.password}
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
              setShowPassword(!showPassword)
            }
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          >
            {showPassword ? (
              <FiEyeOff size={20} />
            ) : (
              <FiEye size={20} />
            )}
          </button>

        </div>

        {/* Confirm Password */}

        <div className="relative">

          <input
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
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
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          >
            {showConfirmPassword ? (
              <FiEyeOff size={20} />
            ) : (
              <FiEye size={20} />
            )}
          </button>

        </div>
             {/* Register Button */}

        <button
          type="submit"
          disabled={loading}
          className="
            flex
            w-full
            items-center
            justify-center
            rounded-xl
            bg-cyan-500
            py-3
            font-semibold
            text-white
            transition
            hover:bg-cyan-600
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>

        {/* Login Link */}

        <p className="text-center text-gray-400">
          Already have an account?{" "}

          <Link
            to="/login"
            className="
              font-medium
              text-cyan-400
              hover:underline
            "
          >
            Login
          </Link>
        </p>

      </form>

    </motion.div>
  );
};

export default RegisterForm;