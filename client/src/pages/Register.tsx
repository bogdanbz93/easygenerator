// Components, Layout, Animations
import InputLabel from "../components/forms/InputLabel";
import Layout from "../layouts/AuthLayout";
import { Block } from "notiflix/build/notiflix-block-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

// Forms
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/schemas";

// Api
import api from "../utils/api";
import { useAuth } from "../utils/AuthContext";

type RegisterValues = {
  fullName: string;
  email: string;
  password: string;
};

// Default component
const Register = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RegisterValues>({
    resolver: yupResolver(registerSchema),
  });
  const { loginDisplay } = useAuth();

  const formSubmit: SubmitHandler<RegisterValues> = async (data) => {
    Block.circle(".register-form", {
      backgroundColor: "rgba(23, 23, 23, 0.75)",
      svgColor: "#FFF",
    });

    try {
      const postData = {
        name: data.fullName,
        email: data.email,
        password: data.password,
      };

      await api.post("/auth/signUp", postData);
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
      Block.remove(".register-form");
    }
  };

  return (
    <Layout title="Create an account">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="register-form mt-5 p-5 rounded-xl overflow-hidden bg-neutral-900/50"
      >
        <InputLabel
          type="text"
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

export default Register;
