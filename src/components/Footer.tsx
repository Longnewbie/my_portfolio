import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="https://github.com/Longnewbie/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gia-long-801b4b2b0/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
        <p className="footer-text">
          Designed & built by{" "}
          <a
            href="https://github.com/Longnewbie/my_portfolio"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Ly Gia Long
          </a>{" "}
          with <span className="heart">💜</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
