const Gradient = () => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="absolute bottom-0 left-0 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-ml-80 lg:translate-y-0"
      aria-hidden="true"
    >
      <circle
        cx={512}
        cy={512}
        r={512}
        fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
        fillOpacity="0.2"
      />
      <defs>
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
          <stop stopColor="#FFA246" />
          <stop offset={1} stopColor="#E14A53" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Gradient;
