import React from "react";
// import Info from "./Info";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects/Projects";
import styles from "./MainContent.module.css";

const MainContent = ({ isSidebarVisible }) => {
  return (
    <div
      className={`${styles.mainContent} ${
        !isSidebarVisible ? styles.fullWidth : ""
      }`}
    >
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
};

export default MainContent;
