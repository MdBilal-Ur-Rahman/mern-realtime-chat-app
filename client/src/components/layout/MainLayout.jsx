const MainLayout = ({ children }) => {
  return (
    <div className="relative h-screen overflow-hidden bg-[#020617]">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* App */}
      <div className="relative h-full p-2 sm:p-3 lg:p-5">

        <div
          className="
            flex
            h-full
            w-full
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-[#0b1120]/95
            shadow-[0_20px_80px_rgba(0,0,0,.55)]
            backdrop-blur-2xl
          "
        >
          {children}
        </div>

      </div>

    </div>
  );
};

export default MainLayout;