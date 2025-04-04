const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center px-5">
        <img
          src="/BelaKim.jpg" // A imagem deve estar na pasta public
          alt="Minha foto"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-5xl font-bold mb-4">Olá, eu sou Bela Kim</h1>
        <p className="text-xl mb-6">
          Desenvolvedor Web apaixonado por criar interfaces incríveis e experiências digitais impactantes.
        </p>
        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition"
        >
          Veja meus projetos
        </a>
        <a
          href="/curriculo.pdf"
          download
          className="bg-gray-700 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition ml-4"
        >
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};

export default Hero;