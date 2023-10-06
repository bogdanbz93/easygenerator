// Layout
import InputLabel from "../components/forms/InputLabel";
import Layout from "../layouts/AuthLayout";

// Form validation imports
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/schemas";

// Animation
import { Block } from "notiflix/build/notiflix-block-aio";

type RegisterValues = {
  fullName: string;
  email: string;
  password: string;
};

// Default component
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: yupResolver(registerSchema),
  });

  const formSubmit: SubmitHandler<RegisterValues> = (data) => {
    console.log(data);
    Block.circle(".register-form", {
      backgroundColor: "rgba(23, 23, 23, 0.75)",
      svgColor: "#FFF",
    });
  };

  return (
    <Layout title="Create an account">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="register-form mt-5 p-5 rounded-xl overflow-hidden bg-neutral-900/50"
      >
        <InputLabel
          type="fullName"
          id="fullName"
          label="Your name"
          placeholder="Let's get to know each other"
          required
          register={{ ...register("fullName") }}
          message={errors.fullName?.message?.toString()}
        />

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
          Create account
        </button>
      </form>
    </Layout>
  );
};

export default Login;
