const Project = ({ src, hrefLive, hrefGithub, title, description }) => {
  return (
    <div className="bg-gray-600 rounded-lg max-w-xs">
      <img className="rounded-t-lg" src={src} alt="" layout="intrinsic" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>

        <p className="mb-3 font-normal">{description}</p>
        <a
          href={hrefLive}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center rounded-lg"
        >
          Live
        </a>
        <a href={hrefGithub}>Github</a>
      </div>
    </div>
  );
};

export default Project;
