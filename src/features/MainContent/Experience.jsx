import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div id="experience" className={styles.experience}>
      <div className={styles.expHeader}>
        <h2>EXPERIENCE</h2>
        <p>Where I have worked and grown</p>
      </div>

      <div className={styles.jobContent}>
        <div className={styles.workItem}>
          <div className={styles.timeLine}>
            <h5>
              12/2026 - <span className={styles.recent}>Present</span>
            </h5>
          </div>
          <div className={styles.workDetail}>
            <div className={styles.nameWork}>
              <h4>
                Software Quality Control (QC) Engineer <br />
                at IT Dragons
              </h4>
            </div>
            <div className={styles.workContent}>
              <h5>
                - Planned and executed comprehensive testing for a Credit
                Scoring system in the Banking domain, ensuring high accuracy in
                risk assessment algorithms. <br />
                - Performed functional, integration, and API testing for a
                Banking Payment Network establishment project, verifying secure
                transactions and data integrity. <br />
                - Led the end-to-end testing lifecycle for an internal HRM
                system, covering payroll, employee management, and access
                control modules. <br />
                - AI Integration: Utilized AI-powered tools (ChatGPT/Copilot) to
                optimize test case generation, automate repetitive test data
                creation, and accelerate bug analysis, reducing overall testing
                time by 30%. <br />
                Skills learned: Banking & Fintech Domain, API Testing (Postman),
                Credit Scoring Validation, HRM Workflows, AI-driven Testing,
                Test Case Design, Defect Tracking.
              </h5>
            </div>
          </div>
        </div>

        <div className={styles.workItem}>
          <div className={styles.timeLine}>
            <h5>10/2025 - 12/2025</h5>
          </div>
          <div className={styles.workDetail}>
            <div className={styles.nameWork}>
              <h4>
                Fullstack Web Developer - Intern <br />
                at AmazingIT
              </h4>
            </div>
            <div className={styles.workContent}>
              <h5>
                - Participated in frontend development while actively performing
                unit testing and code reviews to ensure UI/UX consistency.{" "}
                <br />
                - Conducted functional and regression testing on an internal CRM
                web application to identify bugs and alignment with business
                requirements. <br />
                - Collaborated closely with the team to debug, optimize UI
                components, and verify fixes, ensuring a seamless user
                experience. <br />
                Skills learned: NextJS, Frontend Testing, Regression Testing,
                UI/UX Verification, Git, Docker, Debugging, Problem-solving.
              </h5>
            </div>
          </div>
        </div>

        <div className={styles.workItem}>
          <div className={styles.timeLine}>
            <h5>06/2023 - 08/2025</h5>
          </div>
          <div className={styles.workDetail}>
            <div className={styles.nameWork}>
              <h4>
                Web Development Tutor <br />
                at Funix
              </h4>
            </div>
            <div className={styles.workContent}>
              <h5>
                - Evaluated and performed rigorous code reviews on students' web
                applications based on UI/UX mockups and technical requirements.{" "}
                <br />
                - Tested and verified backend logic, database design
                (SQL/NoSQL), and RESTful APIs (CRUD operations) to ensure system
                stability. <br />- Mentored students on debugging techniques,
                edge-case handling, and deployment strategies, improving project
                success rates. <br />
                Skills learned: Frontend & backend development, code reviewing,
                mentoring, communication, debugging, MongoDB, SQL, RESTful APIs,
                deployment strategies.
              </h5>
            </div>
          </div>
        </div>

        <div className={styles.workItem}>
          <div className={styles.timeLine}>
            <h5>06/2020 - 09/2022</h5>
          </div>
          <div className={styles.workDetail}>
            <div className={styles.nameWork}>
              <h4>
                Development Facilitator <br />
                at World Vision International in Viet Nam
              </h4>
            </div>
            <div className={styles.workContent}>
              <h5>
                - Managed 4 community-based projects across 2 communes, ensuring
                strict compliance with budget ($70,000+) and operational
                guidelines. <br />- Conducted regular Monitoring & Evaluation
                (M&E) to assess project quality, track metrics, and deliver
                detailed reports. <br />
                - Coordinated with diverse stakeholders, demonstrating strong
                analytical and risk-management skills. <br />
                Skills learned: Monitoring & Evaluation (M&E), Detail-oriented
                Mindset, Project Management, Risk Assessment, Collaboration,
                Leadership.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
