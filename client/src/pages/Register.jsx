import RegisterLeft from "../components/auth/RegisterLeft";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <section className="min-h-screen bg-[#020617]">

      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          overflow-hidden
          lg:flex-row
        "
      >

        {/* Left Side */}

        <div className="hidden lg:flex lg:w-1/2">
          <RegisterLeft />
        </div>

        {/* Right Side */}

        <div
          className="
            flex
            w-full
            items-center
            justify-center
            px-6
            py-10
            sm:px-10
            lg:w-1/2
            lg:px-16
          "
        >
          <RegisterForm />
        </div>

      </div>

    </section>
  );
};

export default Register;