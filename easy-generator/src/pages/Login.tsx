// Layout
import InputLabel from "../components/forms/InputLabel";
import Layout from "../layouts/AuthLayout";

// Form validation imports
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Login {
  email: string;
  password: string;
}

// Default component
const Login = () => {
  // Validation schema
  const schema = yup.object({
    email: yup
      .string()
      .required("Email address is not completed!")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "This email address is not valid!"
      ),
    password: yup
      .string()
      .required("The password is not completed!")
      .min(8, "The password should contain min. 8 characters."),
  });

  // Validation form
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const formSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <Layout
      title="Welcome back"
      subtitle="You don’t need any experience to create engaging e-learning courses. Start creating courses now."
    >
      <form onSubmit={handleSubmit(formSubmit)}>
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
        <button
          type="submit"
          className="button-orange w-full"
          disabled={!isValid}
        >
          Log In
        </button>
      </form>
    </Layout>
  );
};

export default Login;
