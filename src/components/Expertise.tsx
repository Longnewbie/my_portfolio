import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faDocker, faJs } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Nest.js",
  "Express.js",
  "Redis",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = ["AWS"];

const labelsThird = ["Git", "GitHub", "Docker", "Linux", "Nginx", "PM2"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faJs} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have hands-on experience building full-stack web applications,
              with a strong focus on backend development using Node.js,
              Express.js, MongoDB, PostgreSQL, and React. I enjoy designing
              scalable RESTful APIs, implementing authentication and
              authorization, and building reliable backend systems that are
              maintainable and efficient.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Cloud & Infrastructure</h3>
            <p>
              I have a solid understanding of cloud infrastructure fundamentals
              through hands-on practice with AWS services, including EC2, VPC,
              IAM, S3, Route 53, and Amplify. I am eager to continue developing
              my skills in cloud technologies.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I have worked with Docker, Nginx, PM2, Vercel, and Render while
              deploying personal projects. I have a basic understanding of
              deployment workflows and am continuing to improve my practical
              experience.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
