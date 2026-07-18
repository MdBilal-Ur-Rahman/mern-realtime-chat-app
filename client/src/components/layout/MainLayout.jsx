const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0f172a]">
      {children}
    </div>
  );
};

export default MainLayout;