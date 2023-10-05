// Layout
import InputLabel from "../components/forms/InputLabel";
import Layout from "../layouts/Layout";

// Default component
const Login = () => {
  return (
    <Layout title="Welcome back,">
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
        <button
          type="submit"
          className="text-neutral-800 font-primarySemibold w-full hover:ring-4 hover:ring-white/20 transition bg-white hover:bg-white focus:outline-none rounded-full tracking-wide px-5 py-2.5 text-center disabled:cursor-not-allowed"
        >
          Log In
        </button>
      </form>
    </Layout>
  );
};

export default Login;
