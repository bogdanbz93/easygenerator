import React from "react";

// Images
import Logo from "../assets/vectors/Logo.svg";
import LogoEg from "../assets/vectors/LogoEg.svg";
import Dots from "../assets/vectors/Dots.svg";
import Secured from "../assets/vectors/Secured.svg";
import Gradient from "../assets/vectors/Gradient";
import { Link, useLocation } from "react-router-dom";

// Types
type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
};

// Default component
const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="overflow-hidden text-white relative bg-pattern flex flex-col min-h-screen w-screen justify-center content-center items-center p-3">
      <a href="https://www.easygenerator.com/" target="_blank">
        <img
          src={LogoEg}
          alt="Easy Generator Logo"
          className="hidden lg:block lg:absolute my-3 lg:top-0 lg:left-5 w-12 lg:w-14"
        />
      </a>

      <div
        data-aos="fade"
        className="grid grid-cols-10 w-full max-w-screen-lg min-h-[37.5rem] bg-neutral-800 overflow-hidden rounded-2xl p-1 gap-x-8 relative m-3"
      >
        {/* Left column */}
        <div
          className={`col-span-10 lg:col-span-6 relative z-10 ${
            pathname === "/register"
              ? "bg-[url('/images/register.jpg')]"
              : "bg-[url('/images/login.jpg')]"
          } bg-cover bg-bottom sm:bg-center lg:bg-right-bottom rounded-[0.75rem] flex flex-col justify-between overflow-hidden transition-all`}
        >
          <Gradient />

          <img
            src={Logo}
            alt="Easy Generator Logo"
            className="pointer-events-none m-8 w-40 z-10"
          />
          <img
            src={Dots}
            width={80}
            alt="Decoration"
            className="pointer-events-none absolute -right-5 md:right-10 top-36 md:top-60"
          />

          <div className="w-full bg-gradient-to-t from-black/50 to-transparent mt-12 lg:mt-0 p-8 border-white/10 z-10 rounded-b-[0.8rem]">
            <p className="leading-6 text-xl lg:leading-8 lg:text-2xl max-w-md text-white tracking-[.005em]">
              {pathname === "/register"
                ? "Give your company a faster, more agile way of developing e-learning."
                : "Create, localize, and share e-learning courses all in one easy-to-use platform."}
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-10 lg:col-span-4 z-10 flex-col flex lg:pl-5 lg:pr-10 lg:py-5 px-5 py-10 justify-center">
          <h1 className="text-2xl">{title}</h1>
          {subtitle && (
            <p className="text-sm mt-2.5 text-neutral-400">{subtitle}</p>
          )}

          <hr className="my-5 border-neutral-700" />
          {children}
          <Link
            className="text-neutral-400 text-sm text-center mt-5"
            to="/register"
          >
            Don’t have an account?{" "}
            <span className="text-white underline underline-offset-2">
              Sign up now →
            </span>
          </Link>

          <Link className="text-neutral-400 text-sm text-center mt-5" to="/">
            Already registered?{" "}
            <span className="text-white underline underline-offset-2">
              Sign in →
            </span>
          </Link>
        </div>
      </div>
      <div className="mt-2 mb-5 flex flex-row items-center gap-x-3 px-5">
        <img
          src={Secured}
          alt="European Union"
          className="pointer-events-none w-10"
        />
        <span className="text-xs text-neutral-700">
          Easygenerator stores your data in the European Union
        </span>
      </div>
    </div>
  );
};

export default AuthLayout;
