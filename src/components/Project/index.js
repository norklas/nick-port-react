const Project = ({ src, hrefLive, hrefGithub, title, description }) => {
  return (
    <div className="bg-celeste rounded-lg max-w-xs border-celeste border-2 shadow-lg transform hover:scale-105 transition duration-2000 ease-out">
      <img className="rounded-t-lg" src={src} alt="" layout="intrinsic" />
      <div className="p-5 text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>

        <p className="mb-3 font-normal">{description}</p>
        <div className="flex justify-center space-x-2">
          <a
            href={hrefLive}
            className="inline-flex items-center py-2 px-6 text-sm font-medium text-center rounded-lg bg-corduroy text-celeste hover:bg-oslo-gray focus:ring-2 focus:outline-none focus:ring-corduroy"
          >
            Live
          </a>
          <a
            href={hrefGithub}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-lg bg-corduroy text-celeste hover:bg-oslo-gray focus:ring-2 focus:outline-none focus:ring-corduroy"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
