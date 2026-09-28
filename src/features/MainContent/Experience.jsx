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
              12/2021 - <span className={styles.recent}>Present</span>
            </h5>
          </div>
          <div className={styles.workDetail}>
            <div className={styles.nameWork}>
              <h4>
                Senior Software Quality Control (QC) Engineer <br />
                at IT Dragons
              </h4>
            </div>
            <div className={styles.workContent}>
              <h5>
                <strong>1. Enterprise HRM & Payroll System <br />
                  [Senior QC Engineer | Playwright Automation & Manual Testing]:</strong><br />
                - Led the overall testing lifecycle; architected comprehensive Test Strategies and E2E automation frameworks using <strong>Playwright (TypeScript)</strong> with <strong>Data-Driven Testing (DDT)</strong>.<br />
                - Automated payroll computation verification across complex tax brackets, social insurance deductions, overtime multipliers, and allowances.<br />
                - Automated cross-browser testing (Chromium, Firefox, WebKit) and implemented automated <strong>RBAC security test scripts</strong> preventing unauthorized data leaks of salary records.<br />
                - Executed data validation testing on the intermediate Hub using complex SQL queries, ensuring zero data corruption between raw client imports and backend databases.<br /><br />

                <strong>2. Banking Payment Network <br />
                  [Middle QC Engineer | Playwright Automation & Manual Testing]:</strong><br />
                - Designed and maintained a Playwright (TypeScript) E2E Automation Framework following the Page Object Model (POM) pattern.<br />
                - Automated core authentication: user <strong>Login, Logout</strong>, session persistence, and invalid credential error handling.<br />
                - Automated <strong>new merchant onboarding</strong> flow: registration, business validation, and merchant portal activation.<br />
                - Automated <strong>purchase transaction workflow</strong>: payment initiation, card/account input validation, and payment gateway callback verification.<br />
                - Automated <strong>transaction hold features</strong> (pre-authorized funds hold reservation, expiration, and status transitions) and <strong>refund workflows</strong> (full/partial refunds, ledger reversal verification).<br />
                - Wrote targeted SQL queries to audit transaction status flags and refund logs in the database; executed manual testing for third-party network timeout edge cases.<br /><br />

                <strong>3. AI-Powered Adaptive Learning & Knowledge Assessment Platform (EdTech) <br />
                  [Middle QC Engineer | 100% Manual Testing & API/Data Validation]:</strong><br />
                - Formulated master Test Strategy and Test Plans covering syllabus/past exam ingestion, dynamic examination UI, error-pattern detection engine, and teacher diagnostic dashboards.<br />
                - Performed manual functional, exploratory, and boundary testing on real-time exam interfaces (autosave, timer sync, submission integrity).<br />
                - Conducted extensive API testing using Postman for AI microservices (document parsing, prompt-to-question generation, token thresholds, JSON schema validation).<br />
                - Validated AI Error-Pattern Recognition & Knowledge Gap Engine: designed simulation matrices for recurring arithmetic slips vs. thematic theory errors, verifying accurate gap classification and remediation plans.<br />
                - Executed complex SQL & MongoDB queries to audit student telemetry event logs and knowledge gap matrices.<br /><br />

                <strong>4. Credit Scoring & Financial Risk Assessment System <br />
                  [Middle QC Engineer | 100% Manual Testing & Data Validation]:</strong><br />
                - Planned and executed comprehensive manual testing strategies for multi-variable credit scoring algorithms and rule engines.<br />
                - Conducted rigorous Data Validation and Negative Testing with corrupted or anomalous credit bureau records to evaluate system error-handling resilience.<br />
                - Formulated complex SQL queries to audit score computation tables, validation rules, and compliance audit logs.<br /><br />

                <em>Skills & Tools: Playwright (TypeScript), Manual Testing, E2E Automation, API Testing (Postman & Playwright), Advanced SQL, NoSQL (MongoDB), CI/CD (GitHub Actions), EdTech AI, Banking & Payment Networks, HRM & Payroll.</em>
              </h5>
            </div>
          </div>
        </div>

        <div className={styles.workItem}>
          <div className={styles.timeLine}>
            <h5>09/2021 - 12/2021</h5>
          </div>
          <div className={styles.workDetail}>
            <div className={styles.nameWork}>
              <h4>
                Junior / Fresher Software QC Engineer <br />
                at AmazingIT
              </h4>
            </div>
            <div className={styles.workContent}>
              <h5>
                - Analyzed business requirements, designed detailed test cases and test scenarios for an internal CRM web application. <br />
                - Executed manual functional, UI/UX, and regression testing across sprint cycles to identify defects and ensure requirement alignment. <br />
                - Performed basic API testing using Postman to validate CRUD endpoints, HTTP status codes, and JSON response payloads. <br />
                - Wrote basic SQL queries (SELECT, WHERE, JOIN) to prepare test data and verify database integrity. <br />
                - Logged, tracked, and verified defect lifecycles in Jira; collaborated with development team in Agile standups. <br />
                Skills learned: Functional Testing, Regression Testing, Test Case Design, API Testing (Postman), SQL, Jira, Agile/Scrum.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
