import { FiX } from "react-icons/fi";

const ImageViewer = ({
  image,
  onClose,
}) => {
  if (!image) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/90
        backdrop-blur-sm
      "
    >
      {/* Close Button */}

      <button
        onClick={onClose}
        className="
          absolute
          right-6
          top-6
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-white
          transition
          hover:bg-red-500
        "
      >
        <FiX size={24} />
      </button>

      {/* Image */}

      <img
        src={image.src}
        alt={image.name}
        className="
          max-h-[90vh]
          max-w-[90vw]
          rounded-2xl
          object-contain
          shadow-2xl
        "
      />
    </div>
  );
};

export default ImageViewer;