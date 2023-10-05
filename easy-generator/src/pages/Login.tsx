// Layout
import { Link } from "react-router-dom";
import InputLabel from "../components/forms/InputLabel";
import Layout from "../layouts/AuthLayout";

// Default component
const Login = () => {
  return (
    <Layout
      title="Welcome back"
      subtitle="You don’t need any experience to create engaging e-learning courses. Start creating courses now."
    >
      <form>
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
          Log In
        </button>
      </form>

      <Link
        className="text-neutral-400 text-sm text-center mt-5"
        to="/register"
      >
        Don’t have an account? <span className="text-white">Sign up now →</span>
      </Link>
    </Layout>
  );
};

export default Login;
