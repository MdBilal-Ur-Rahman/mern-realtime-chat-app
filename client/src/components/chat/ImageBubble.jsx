const ImageBubble = ({
  src,
  fileName,
  onOpen,
}) => {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group mt-2 overflow-hidden rounded-2xl"
    >
      <img
        src={src}
        alt={fileName}
        className="
          max-h-72
          w-full
          rounded-2xl
          object-cover
          transition
          duration-300
          group-hover:scale-105
        "
      />
    </button>
  );
};

export default ImageBubble;