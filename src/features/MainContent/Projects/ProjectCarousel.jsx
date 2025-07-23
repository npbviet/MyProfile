import React from "react";
import styles from "./ProjectCarousel.module.css";

const ProjectCarousel = ({ project }) => (
  <div className={styles.carouselWrapper}>
    <div className={styles.carouselContent}>
      <div className={styles.projectText}>
        <div className={styles.projectVideo}>
          <video src={project.videoUrl} controls />
        </div>
        <div className={styles.descriptionGrid}>
          {Object.entries(project.details).map(([label, value]) => (
            <React.Fragment key={label}>
              <div className={styles.label}>{label}</div>
              <div className={styles.value}>
                {Array.isArray(value) ? (
                  <ul>
                    {value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : label === "Demo" || label === "Github" ? (
                  <a href={value} target="_blank" rel="noreferrer">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCarousel;
