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
      className="
        group
        relative
        flex
        h-14
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        font-semibold
        text-white
        shadow-lg
        shadow-cyan-500/30
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-cyan-500/50
        active:translate-y-0
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {/* Shine Effect */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>

      <span className="relative z-10">
        {loading ? "Please wait..." : children}
      </span>
    </button>
  );
};

export default Button;