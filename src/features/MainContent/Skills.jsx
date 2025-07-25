import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div id="languagesSkills" className={styles.languagesSkills}>
      <div className={styles.skillsHeader}>
        <h2>Languages & Skills</h2>
        <p>Technical skills and languages</p>
      </div>

      <div className={styles.skillsContent}>
        {/* Languages Section */}
        <div className={styles.section}>
          <h3>Languages</h3>
          <ul>
            <li>
              <strong> English (IELTS 5.5 - 6.0):</strong>
              <div className={styles.subInfo}>
                Intermediate - Can read technical documents, write emails, and
                formal reports.
              </div>
            </li>
            <li>
              <strong> French (DELF B1 - B2 level):</strong>

              <div className={styles.subInfo}>
                Advanced - Confident in reading, writing, listening, and
                speaking. Can participate in discussions, meetings, and write
                formal reports.
              </div>
            </li>
          </ul>
        </div>

        {/* Technical Skills Section */}
        <div className={styles.section}>
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> HTML5, CSS3, JavaScript, ReactJS
            </li>
            <li>
              <strong>Backend:</strong> Node.js (Express), MongoDB, MySQL,
              RESTful API
            </li>
            <li>
              <strong>Others:</strong> Git & GitHub, Responsive Web Design,
              Figma (basic)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
