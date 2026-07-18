import { Link, useLocation } from "react-router-dom";

const AuthLayout = ({
  title,
  subtitle,
  children,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f172a] px-4">

      <div className="w-full max-w-md rounded-3xl bg-[#111827] p-8 shadow-2xl">

        <h1 className="text-center text-3xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-center text-gray-400">
          {subtitle}
        </p>

        <div className="mt-8">
          {children}
        </div>

        <div className="mt-6 text-center text-gray-400">

          {pathname === "/login" ? (
            <>
              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-semibold text-cyan-400 hover:underline"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}

              <Link
                to="/login"
                className="font-semibold text-cyan-400 hover:underline"
              >
                Login
              </Link>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default AuthLayout;