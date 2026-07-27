import "../assets/styles/Contact.scss";

import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h1>Let&apos;s Work Together</h1>
            <div className="header-underline"></div>
          </div>

          <p className="contact-description">
            I'm actively seeking internship and fresher opportunities in Backend
            or Full-stack Development. I'm passionate about building reliable
            software, continuously improving my technical skills, and
            contributing to collaborative development teams. If you think we
            could work together, I&apos;d be happy to connect.
          </p>

          <div className="contact-info">
            <a href="mailto:lygialong201@gmail.com" className="contact-card">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <strong>lygialong201@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://github.com/Longnewbie/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <GitHubIcon />
              </div>
              <div className="contact-details">
                <span className="contact-label">GitHub</span>
                <strong>github.com/Longnewbie</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/gia-long-801b4b2b0/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <LinkedInIcon />
              </div>
              <div className="contact-details">
                <span className="contact-label">LinkedIn</span>
                <strong>gia-long-801b4b2b0</strong>
              </div>
            </a>
          </div>

          <div className="contact-actions">
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href="mailto:lygialong201@gmail.com"
              className="btn-primary"
            >
              Send Email
            </Button>

            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href="https://drive.google.com/file/d/1hzzNMS4InKz6gb9RKDBRmEl4yN7A0AQD/view"
              className="btn-secondary"
            >
              Preview CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
