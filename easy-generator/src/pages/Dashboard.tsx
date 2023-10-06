import Logo from "../assets/vectors/Logo.svg";

const Dashboard: React.FC = () => (
  <div className="flex flex-col w-screen h-screen items-center justify-center gap-y-5 text-white p-5">
    <img
      src={Logo}
      alt="Easy Generator Logo"
      className="w-36 mb-5"
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="750"
    />
    <h1
      className="text-2xl md:text-3xl"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="750"
    >
      Welcome to the application
    </h1>
    <p
      className="text-sm text-neutral-400 max-w-xs text-center"
      data-aos="fade-up"
      data-aos-delay="350"
      data-aos-duration="750"
    >
      Thanks for viewing my application. If you want to resume the process,
      click the button below.
    </p>
    <button
      type="button"
      className="button-primary"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="750"
    >
      Log out
    </button>
  </div>
);

export default Dashboard;
