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
              <strong>Testing & Methodologies:</strong> Manual Testing, Automation Testing (Playwright), Functional Testing, Integration Testing, Regression Testing, API Testing, Data-Driven Testing (DDT), Test Case Design, Defect Lifecycle, Agile/Scrum
            </li>
            <li>
              <strong>Databases & Backend:</strong>SQL (PostgreSQL, MySQL), NoSQL (MongoDB aggregation), RESTful APIs, Node.js
            </li>
            <li>
              <strong>CI/CD & Tools:</strong> GitHub Actions, Docker, Git & GitHub, Jira, Confluence
            </li>
            <li>
              <strong>Domain Expertise:</strong> EdTech & AI (Adaptive Learning, Knowledge Gap Diagnosis), Banking & Payment Networks (Clearing & Settlement, Credit Scoring), Enterprise HRM & Payroll
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
