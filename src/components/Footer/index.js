import "./Footer.css";
const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ background: "var(--color-background)" }}
    >
      <div className="redes">
        <a href="https://github.com/alizunega.com">
          <img src="./img/icono_github.png" alt="Link a Perfil Github" />
        </a>
        <a href="https://www.linkedin.com/in/alicialzunegamza/">
          <img src="./img/linkedin.svg" alt="Link a Perfil LinkedIn" />
        </a>
        <a href="https://t.me/AlitaZ16">
          <img src="./img/telegram-negro.png" alt="Link a Mensaje Telegram" />
        </a>
      </div>
      <div className="info">
        <p> &copy;2024</p>
        <a href="https://alizunega.github.io/portfolio_alura/">Alicia Zuñega</a>
      </div>
    </footer>
  );
};
export default Footer;
