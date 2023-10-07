// Components, Layout, Animations
import InputLabel from "../components/forms/InputLabel";
import Layout from "../layouts/AuthLayout";
import { Block } from "notiflix/build/notiflix-block-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

// Forms
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../utils/schemas";

// Api
import api from "../utils/api";
import { useAuth } from "../utils/AuthContext";

type LoginValues = {
  email: string;
  password: string;
};

// Default component
const Login = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: yupResolver(loginSchema),
  });
  const { loginDisplay } = useAuth();

  const formSubmit: SubmitHandler<LoginValues> = async (data) => {
    Block.circle(".login-form", {
      backgroundColor: "rgba(23, 23, 23, 0.75)",
      svgColor: "#FFF",
    });

    try {
      const postData = {
        email: data.email,
        password: data.password,
      };

      await api.post("/auth/login", postData);
      reset();
      loginDisplay();
    } catch (error: any) {
      const errorServer = error.response.data.message;
      let errorMessage = "";

      if (Array.isArray(errorServer)) {
        if (errorServer.length > 0) {
          errorMessage = errorServer[0];
        }
      } else if (typeof errorServer === "string") {
        errorMessage = errorServer;
      }

      Report.failure("We couldn't continue", errorMessage, "Try again");
    } finally {
      Block.remove(".login-form");
    }
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
