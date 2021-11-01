const Footer = () => {
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <p className="text-light">
            App desenvolvido por{" "}
            <a
              href="https://github.com/leonardo-ericom"
              target="_blank"
              rel="noreferrer"
            >
              Leonardo Ribeiro
            </a>
          </p>
          <p className="text-light">
            <small>
              <strong>Semana Spring React</strong>
              <br />
              Evento promovido pela escola DevSuperior:{" "}
              <a
                href="https://instagram.com/https:/www.instagram.com/leonardo_rmc/"
                target="_blank"
                rel="noreferrer"
              >
                @leonardo_rmc
              </a>
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
