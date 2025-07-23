import styles from "./ProjectModal.module.css";
import ProjectCarousel from "./ProjectCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectModal = ({ isOpen, onClose, slide }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>
          {slide.title} {slide.subtitle}
        </h2>
        <button className={styles.closeBtn} onClick={onClose}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>
        <ProjectCarousel project={slide} />
      </div>
    </div>
  );
};

export default ProjectModal;
