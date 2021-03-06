import avatar from "../../assets/images/avatar.jpg";

const About = () => {
  return (
    <div className="mt-20 flex flex-row justify-center px-3 text-celeste">
      <div>
        <div className="flex justify-center pb-10">
          <img
            src={avatar}
            alt="Nick"
            className="rounded-full border-celeste border-2"
            width="150"
            height="150"
          />
        </div>
        <p className="text-xl px-20 text-center lg:w-2/4 lg:mx-auto">
          Frontend Web Developer with a background in Manufacturing. Naturally
          curious, dedicated life-long learner, and welcoming to new challenges.
        </p>
        <br />
        <p className="text-xl px-20 text-center lg:w-2/4 lg:mx-auto">
          Continuously looking to solve problems in efficient ways, while never
          overlooking the fine details. Specialized in React/Next.js, but
          proficient in much more.
        </p>
      </div>
    </div>
  );
};

export default About;
