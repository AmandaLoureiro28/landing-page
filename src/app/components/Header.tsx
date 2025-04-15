const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo ou Nome */}
        <h1 className="text-3xl font-bold">Meu Portfólio</h1>

        {/* Botão de alternância para menu responsivo */}
        <button
          className="block md:hidden text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Navegação */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-gray-300">
                Início
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-300">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contato
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-gray-300">
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;