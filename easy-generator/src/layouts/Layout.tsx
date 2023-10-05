import React from "react";

// Images
import Logo from "../assets/vectors/Logo.svg";
import Dots from "../assets/vectors/Dots.svg";

import Gradient from "../assets/vectors/Gradient";

// Types
type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

// Default component
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="text-white relative bg-pattern flex flex-col h-screen w-screen justify-center content-center items-center">
      <div
        data-aos="fade"
        className="grid grid-cols-10 max-w-screen-lg w-full min-h-[35rem] bg-neutral-800 overflow-hidden rounded-2xl p-1 gap-x-8 relative"
      >
        {/* Left column */}
        <div className="col-span-6 relative z-10 bg-[url('/images/login.jpg')] bg-cover bg-right-bottom rounded-[0.75rem] flex flex-col justify-between overflow-hidden">
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
            className="pointer-events-none absolute right-10 top-60"
          />

          <div className="w-full bg-gradient-to-t from-black/50 to-transparent p-8 border-white/10 z-10 rounded-b-[0.8rem]">
            <h1 className="leading-7 text-2xl max-w-[22.5rem] text-white tracking-[.015em]">
              “Everything you need to create e-learning courses — Easy”
            </h1>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-4 z-10 flex-col flex pl-5 pr-10 py-5 justify-center">
          <p className="text-2xl">{title}</p>
          <p className="text-sm mt-2.5 text-neutral-400">
            You don’t need any experience to create engaging e-learning courses.
            Start creating courses now.
          </p>
          <hr className="my-5 border-neutral-700" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
