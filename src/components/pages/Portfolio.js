import Project from "../Project";
import goFish from "../../assets/images/go-fish-home.png";
import whereWander from "../../assets/images/where-wander.png";
import techBlog from "../../assets/images/tech-blog.jpg";
import nextPort from "../../assets/images/nextjs-port.jpg";
import weatherDashboard from "../../assets/images/weather-dash.jpg";
import noteTaker from "../../assets/images/note-taker.jpg";
import giv from "../../assets/images/giv.jpg";

const Portfolio = () => {
  return (
    <div className="my-10 px-3 text-center">
      <p className="text-3xl font-bold mb-10 text-celeste">Featured Projects</p>
      <div className="y-8 flex flex-col items-center justify-center gap-10 sm:flex-row flex-wrap text-corduroy">
        <Project
          src={goFish}
          title={"Go Fish"}
          description={"JavaScript/Express/Sequelize/MVC"}
          hrefLive={"https://go-fish-project-two.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/go-fish"}
        />

        <Project
          src={giv}
          title={"giv."}
          description={"MERN/GraphQL/Apollo"}
          hrefLive={"https://giv-social.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/giv"}
        />

        <Project
          src={whereWander}
          title={"Where to Wander"}
          description={"JavaScript/API/jQuery"}
          hrefLive={"https://norklas.github.io/where-to-wander/"}
          hrefGithub={"https://github.com/norklas/where-to-wander"}
        />

        <Project
          src={techBlog}
          title={"Tech Blog"}
          description={"JavaScript/Express/bCrypt/MVC"}
          hrefLive={"https://norklas-tech-blog.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/mvc-tech-blog"}
        />

        <Project
          src={nextPort}
          title={"Next.js Portfolio"}
          description={"Next.js/Tailwind"}
          hrefLive={"https://www.melanson.tech/"}
          hrefGithub={"https://github.com/norklas/nick-portfolio"}
        />

        <Project
          src={weatherDashboard}
          title={"Weather Dashboard"}
          description={"JavaScript/API/jQuery/Tailwind"}
          hrefLive={"https://norklas.github.io/weather-dashboard/"}
          hrefGithub={"https://github.com/norklas/weather-dashboard"}
        />

        <Project
          src={noteTaker}
          title={"Note Taker"}
          description={"JavaScript/Express/UUID"}
          hrefLive={"https://nork-note-taker.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/note-taker-app"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
