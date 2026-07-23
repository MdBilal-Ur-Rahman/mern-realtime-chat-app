import { motion } from "framer-motion";

import {
  FiMessageCircle,
  FiUsers,
  FiShield,
} from "react-icons/fi";

const RegisterLeft = () => {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-cyan-600
        via-sky-700
        to-indigo-900
        p-16
        text-white
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

      <motion.div
        initial={{
          opacity: 0,
          x: -40,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10"
      >
        <h1 className="text-5xl font-bold leading-tight">
          Join The
          <br />
          Conversation
        </h1>

        <p className="mt-6 max-w-md text-lg text-cyan-100">
          Create your account and enjoy secure,
          fast and real-time messaging with your
          friends anywhere.
        </p>

        {/* Features */}

        <div className="mt-14 space-y-8">

          <div className="flex items-center gap-5">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-lg">
              <FiMessageCircle size={28} />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Instant Messaging
              </h3>

              <p className="text-cyan-100">
                Fast and reliable chats.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-lg">
              <FiUsers size={28} />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Connect People
              </h3>

              <p className="text-cyan-100">
                Stay connected with everyone.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-lg">
              <FiShield size={28} />
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Safe & Secure
              </h3>

              <p className="text-cyan-100">
                Your privacy is always protected.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default RegisterLeft;