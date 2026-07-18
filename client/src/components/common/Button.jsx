const Button = ({
  children,
  type = "button",
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default Button;