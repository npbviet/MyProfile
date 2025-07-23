import styles from "./ProjectCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard = ({ project, onClick }) => (
  <div className={styles.card} onClick={() => onClick(project)}>
    <h3>
      <FontAwesomeIcon icon={project.icon} className={styles.iconCard} />
      {project.title} <br />
      <span className={styles.subtitle}>{project.subtitle}</span>
    </h3>
    <img src={project.image} alt={project.title} className={styles.thumbnail} />
    <p>{project.brief}</p>
    <span className={styles.details}>→ See details</span>
  </div>
);

export default ProjectCard;
