import { Link, useLocation } from "react-router-dom";

const AuthLayout = ({
  title,
  subtitle,
  children,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617] px-4 py-6 sm:px-6 sm:py-8 md:px-8">

      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[180px]" />

      {/* Auth Card */}
      <div className="relative w-full max-w-[440px] sm:max-w-2xl md:max-w-3xl overflow-hidden rounded-[20px] sm:rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-12 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">

        {/* Logo */}
        <div className="mb-5 sm:mb-8 flex justify-center">
          <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg sm:text-2xl font-bold text-white shadow-lg shadow-cyan-500/30">
            C
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {title}
        </h1>

        <p className="mt-2 sm:mt-3 text-center text-xs sm:text-base text-gray-400">
          {subtitle}
        </p>

        {/* Form */}
        <div className="mt-6 sm:mt-10">
          {children}
        </div>

        {/* Divider */}
        <div className="my-5 sm:my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"></div>

          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs sm:text-sm text-gray-400">

          {pathname === "/login" ? (
            <>
              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-semibold text-cyan-400 transition hover:text-cyan-300"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}

              <Link
                to="/login"
                className="font-semibold text-cyan-400 transition hover:text-cyan-300"
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