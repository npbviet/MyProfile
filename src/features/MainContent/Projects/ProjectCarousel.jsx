import React from "react";
import styles from "./ProjectCarousel.module.css";

const ProjectCarousel = ({ project }) => (
  <div className={styles.carouselWrapper}>
    <div className={styles.carouselContent}>
      <div className={styles.projectText}>
        <div className={styles.projectVideo}>
          {project.videoUrl.includes("youtu") ? (
            <iframe
              width="100%"
              height="315"
              src={project.videoUrl.replace(
                "youtu.be",
                "www.youtube.com/embed"
              )}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video src={project.videoUrl} controls />
          )}
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
                ) : label === "Github_FE" || label === "Github_BE" ? (
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
