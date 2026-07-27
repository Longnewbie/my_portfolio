import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import avt from "../assets/images/avt.avif";

function Main() {
  return (
    // <div className="container">
    <div className="about-section">
      <div className="image-wrapper">
        <img src={avt} alt="Avatar" />
      </div>
      <div className="content">
        <div className="social_icons">
          <a
            href="https://github.com/Longnewbie/"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gia-long-801b4b2b0/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <h1>Ly Gia Long</h1>
        <p>Full Stack Engineer</p>

        <div className="mobile_social_icons">
          <a
            href="https://github.com/Longnewbie/"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/gia-long-801b4b2b0/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Main;
