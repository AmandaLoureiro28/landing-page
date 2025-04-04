const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-1">Desenvolvido com Next.js e Tailwind CSS</p>
          <p className="text-xs mt-1">
            <a href="#hero" className="hover:underline">
              Voltar ao topo
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;