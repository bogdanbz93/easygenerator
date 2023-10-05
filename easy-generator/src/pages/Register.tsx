// Layout
import InputLabel from "../components/forms/InputLabel";
import Layout from "../layouts/AuthLayout";

// Default component
const Login = () => {
  return (
    <Layout title="Create an account">
      <form>
        <InputLabel
          type="Name"
          id="Name"
          label="Your name"
          placeholder="Let's get to know each other"
          required
        />

        <InputLabel
          type="email"
          id="email"
          label="Your email"
          placeholder="Business email"
          required
        />

        <InputLabel
          type="password"
          id="password"
          label="Your password"
          placeholder="Password"
          required
        />
        <button type="submit" className="button-orange w-full">
          Register
        </button>
      </form>
    </Layout>
  );
};

export default Login;
