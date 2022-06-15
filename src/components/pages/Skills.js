const Skills = () => {
  return (
    <div className="my-16 px-3" id="skills">
      <p className="text-3xl font-bold text-center">Technologies</p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 my-8">
        <div>
          <h3 className="text-2xl mb-3">Languages</h3>
          <ul className="pl-7 text-lg">
            <li>HTML5 (Handlebars)</li>
            <li>CSS3 (SASS)</li>
            <li>JavaScript (ES6)</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Methods</h3>
          <ul className="pl-7 text-lg">
            <li id="li-text">OOP</li>
            <li>Webpack/NPM</li>
            <li>PWAs/Service Workers</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Frameworks & Libraries</h3>
          <ul className="pl-7 text-lg">
            <li>React/Next.js</li>
            <li>jQuery</li>
            <li>TailwindCSS/Bootstrap</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Databases & Tools</h3>
          <ul className="pl-7 text-lg">
            <li>MongoDB (Mongoose)</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
