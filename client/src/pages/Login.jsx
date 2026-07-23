import { useState } from "react";
import toast from "react-hot-toast";

import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);

      toast.error("Please fill all required fields.");

      return;
    }

    try {
      setLoading(true);

      console.log(formData);

      // Fake API Call
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast.success("Login Successful!");

      // Future
      // navigate("/");
    } catch (error) {
      console.log(error);

      toast.error("Login Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to continue chatting"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-6 px-2 sm:px-6 md:px-8"
      >
        <div className="space-y-3 sm:space-y-5 [&_label]:text-base sm:[&_label]:text-lg [&_label]:font-semibold [&_label]:text-white">
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
        </div>

        <Button
          type="submit"
          loading={loading}
        >
          Login
        </Button>
      </form>
    </AuthLayout>
  );
};

export default Login;