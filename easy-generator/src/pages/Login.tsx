// Layout
import InputLabel from "../components/forms/InputLabel";
import Layout from "../layouts/AuthLayout";

// Form validation imports
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/schemas";

// Animation
import { Block } from "notiflix/build/notiflix-block-aio";

type LoginValues = {
  email: string;
  password: string;
};

// Default component
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: yupResolver(loginSchema),
  });

  const formSubmit: SubmitHandler<LoginValues> = (data) => {
    console.log(data);
    Block.circle(".login-form", {
      backgroundColor: "rgba(23, 23, 23, 0.75)",
      svgColor: "#FFF",
    });
  };

  return (
    <Layout
      title="Welcome back"
      subtitle="You don’t need any experience to create engaging e-learning courses. Start creating courses now."
    >
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="login-form mt-5 p-5 rounded-xl overflow-hidden bg-neutral-900/50"
      >
        <InputLabel
          type="email"
          id="email"
          label="Your email"
          placeholder="Business email"
          required
          register={{ ...register("email") }}
          message={errors.email?.message?.toString()}
        />

        <InputLabel
          type="password"
          id="password"
          label="Your password"
          placeholder="Password"
          required
          register={{ ...register("password") }}
          message={errors.password?.message?.toString()}
        />

        <button type="submit" className="button-primary w-full">
          Log in now
        </button>
      </form>
    </Layout>
  );
};

export default Login;
