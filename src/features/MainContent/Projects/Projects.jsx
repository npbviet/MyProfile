import { useState } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectData from "../../../data/projectData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const prevProject = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? projectData.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setSelectedIndex((prev) =>
      prev === projectData.length - 1 ? 0 : prev + 1
    );
  };

  const selectedProject =
    selectedIndex !== null ? projectData[selectedIndex] : null;

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHeader}>
        <h2>Projects</h2>
        <p>Code in action</p>
      </div>

      <div className={styles.grid}>
        {projectData.map((proj, index) => (
          <ProjectCard
            key={index}
            project={proj}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className={styles.modalWrapper}>
          <button className={styles.arrowLeft} onClick={prevProject}>
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-left"
              className={styles.icon}
            />
          </button>

          <ProjectModal
            isOpen={true}
            onClose={closeModal}
            slide={selectedProject}
          />

          <button className={styles.arrowRight} onClick={nextProject}>
            <FontAwesomeIcon
              icon="fa-solid fa-chevron-right"
              className={styles.icon}
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
