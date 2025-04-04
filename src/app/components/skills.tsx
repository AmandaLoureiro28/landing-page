
const Skills = () => {
    return (
      <section id="skills" className="bg-gray-100 text-gray-800 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Minhas Habilidades</h2>
          
          {/* Soft Skills */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Comunicação efetiva</li>
              <li>Trabalho em equipe</li>
              <li>Resolução de problemas</li>
              <li>Adaptabilidade</li>
              <li>Gestão de tempo</li>
            </ul>
          </div>
          
          {/* Hard Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Hard Skills</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <i className="fab fa-html5 text-orange-500 mr-2"></i> HTML5
              </li>
              <li>
                <i className="fab fa-css3-alt text-blue-500 mr-2"></i> CSS3 e frameworks como Tailwind CSS
              </li>
              <li>
                <i className="fab fa-js text-yellow-500 mr-2"></i> JavaScript (incluindo ES6+)
              </li>
              <li>
                <i className="fab fa-react text-blue-400 mr-2"></i> React.js e Next.js
              </li>
              <li>
                <i className="fab fa-node text-green-500 mr-2"></i> Node.js
              </li>
              <li>Banco de dados (SQL e MongoDB)</li>
              <li>Versionamento de código com Git</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;