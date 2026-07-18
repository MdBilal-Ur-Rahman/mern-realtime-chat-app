import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const Register = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join our chat community"
    >
      <div className="space-y-4">

        <Input
          type="text"
          placeholder="Full Name"
        />

        <Input
          type="email"
          placeholder="Email"
        />

        <Input
          type="password"
          placeholder="Password"
        />

        <Input
          type="password"
          placeholder="Confirm Password"
        />

        <Button>
          Register
        </Button>

      </div>
    </AuthLayout>
  );
};

export default Register;
