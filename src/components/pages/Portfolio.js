import Project from "../Project";
import goFish from "../../assets/images/go-fish-home.png";

const Portfolio = () => {
  return (
    <div className="my-10 px-3 text-center">
      <p className="text-3xl font-bold mb-10">Featured Projects</p>
      <div className="y-8 flex flex-col items-center justify-center gap-10 sm:flex-row flex-wrap">
        <Project
          src={goFish}
          title={"Go Fish"}
          description={"JavaScript/Express/Sequelize/MVC"}
          hrefLive={"https://go-fish-project-two.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/go-fish"}
        />

        <Project
          src={goFish}
          title={"Go Fish"}
          description={"JavaScript/Express/Sequelize/MVC"}
          hrefLive={"https://go-fish-project-two.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/go-fish"}
        />

        <Project
          src={goFish}
          title={"Go Fish"}
          description={"JavaScript/Express/Sequelize/MVC"}
          hrefLive={"https://go-fish-project-two.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/go-fish"}
        />

        <Project
          src={goFish}
          title={"Go Fish"}
          description={"JavaScript/Express/Sequelize/MVC"}
          hrefLive={"https://go-fish-project-two.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/go-fish"}
        />

        <Project
          src={goFish}
          title={"Go Fish"}
          description={"JavaScript/Express/Sequelize/MVC"}
          hrefLive={"https://go-fish-project-two.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/go-fish"}
        />

        <Project
          src={goFish}
          title={"Go Fish"}
          description={"JavaScript/Express/Sequelize/MVC"}
          hrefLive={"https://go-fish-project-two.herokuapp.com/"}
          hrefGithub={"https://github.com/norklas/go-fish"}
        />
      </div>
    </div>
  );
};

export default Portfolio;
