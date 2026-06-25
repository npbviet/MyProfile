import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div id="languagesSkills" className={styles.languagesSkills}>
      <div className={styles.skillsHeader}>
        <h2>Languages & Skills</h2>
        <p>Technical skills and languages</p>
      </div>

      <div className={styles.skillsContent}>
        {/* Technical Skills Section */}
        <div className={styles.section}>
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <strong>Testing & Methodologies:</strong> Functional Testing,
              Integration Testing, Regression Testing, API Testing, Test Case
              Design, Defect Tracking, Agile/Scrum
            </li>
            <li>
              <strong>Testing Tools & AI:</strong> Postman, Jira, GitHub Issues,
              AI-powered testing tools (ChatGPT, GitHub Copilot for test data &
              case generation)
            </li>
            <li>
              <strong>Databases & Backend:</strong> SQL (MySQL), NoSQL
              (MongoDB), Node.js (Express), RESTful API verification
            </li>
            <li>
              <strong>Frontend & Core Tech:</strong> HTML5, CSS3, JavaScript,
              ReactJS, NextJS, DevTools (Debugging)
            </li>
            <li>
              <strong>Others:</strong> Git & GitHub, Docker, Figma (UI/UX
              Review)
            </li>
          </ul>
        </div>

        {/* Soft Skills Section */}
        <div className={styles.softSkills}>
          <div className={styles.section}>
            <h3>Soft Skills</h3>
            <ul>
              <li>
                <strong>Communication:</strong> Clear and effective in
                explaining ideas.
              </li>
              <li>
                <strong>Teamwork:</strong> Collaborates well in groups.
              </li>
              <li>
                <strong>Problem-solving:</strong> Quick to identify and solve
                issues.
              </li>
              <li>
                <strong>Project coordination:</strong> Able to plan and manage
                tasks effectively.
              </li>
              <li>
                <strong>Adaptability:</strong> Comfortable with change and
                learning.
              </li>
              <li>
                <strong>Mentoring:</strong> Supports and guides others.
              </li>
            </ul>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Skills;
