const Skills = () => {
  return (
    <div className="my-16 px-3 text-celeste" id="skills">
      <p className="text-3xl font-bold text-center mb-12">Technologies</p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5 my-8 mx-auto">
        <div>
          <h3 className="text-2xl mb-3">Languages</h3>
          <ul className="pl-7 text-lg">
            <li className="LINE">HTML5 (Handlebars)</li>
            <li className="LINE">CSS3 (SASS)</li>
            <li className="LINE">JavaScript (ES6)</li>
            <li className="LINE">SQL</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Methods</h3>
          <ul className="pl-7 text-lg">
            <li className="LINE">OOP</li>
            <li className="LINE">Webpack/NPM</li>
            <li className="LINE">PWAs/Service Workers</li>
            <li className="LINE">Responsive Design</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Frameworks & Libraries</h3>
          <ul className="pl-7 text-lg">
            <li className="LINE">React/Next.js</li>
            <li className="LINE">jQuery</li>
            <li className="LINE">TailwindCSS/Bootstrap</li>
            <li className="LINE">Node.js</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Databases & Tools</h3>
          <ul className="pl-7 text-lg">
            <li className="LINE">MongoDB (Mongoose)</li>
            <li className="LINE">MySQL</li>
            <li className="LINE">Git</li>
            <li className="LINE">Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
