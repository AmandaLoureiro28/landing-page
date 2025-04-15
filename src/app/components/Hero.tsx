const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center px-5">
        {/* Foto de perfil com estilo */}
        <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src="/BelaKim.jpg" // Certifique-se de que a imagem está em /public
            alt="Foto de Bela Kim"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nome e descrição */}
        <h1 className="text-5xl font-bold mb-4">Olá, eu sou Bela Kim</h1>
        <p className="text-xl mb-6 max-w-xl mx-auto">
          Desenvolvedora Web apaixonada por criar interfaces incríveis e experiências digitais memoráveis.
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition"
          >
            Veja meus projetos
          </a>
          <a
            href="/curriculo.pdf"
            download
            className="bg-gray-700 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;