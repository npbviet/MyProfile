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
              06/2023 - <span className={styles.recent}>Present</span>
            </h5>
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
                - Mentored students to build and deploy web applications based
                on provided UI/UX mockups.
                <br />- Assisted with backend logic, database design, and CRUD
                operations using SQL and NoSQL.
                <br />- Provided feedback and 1-on-1 sessions, improving student
                project success rate.
                <br />
                <strong>Skills learned:</strong> Frontend & backend development,
                code reviewing, mentoring, communication, debugging, MongoDB,
                SQL, RESTful APIs, deployment strategies.
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
                - Managed 4 community-based projects across 2 communes, with an
                annual budget of over $70,000, impacting 1200+ children.
                <br />
                - Worked on areas including health, nutrition, child protection,
                livelihoods, and sponsorship engagement.
                <br />- Coordinated with local stakeholders to ensure
                sustainable program delivery. <br />
                <strong>Skills learned:</strong> Project management, community
                engagement, budgeting, report writing, monitoring & evaluation,
                cross-sectoral collaboration, leadership, teamwork.
              </h5>
            </div>
          </div>
        </div>

        <div className={styles.workItem}>
          <div className={styles.timeLine}>
            <h5>09/2018 - 03/2019</h5>
          </div>
          <div className={styles.workDetail}>
            <div className={styles.nameWork}>
              <h4>
                Intern <br />
                at Danang Centers for Disease Control
              </h4>
            </div>
            <div className={styles.workContent}>
              <h5>
                - Assisted in coordinating vaccination schedules and improving
                clinic efficiency.
                <br />- Educated over 100 patients on immunization and nutrition
                for maternal and child health.
                <br />- Supported data collection for immunization records.
                <br />
                <strong>Skills learned:</strong> Health communication, public
                health education, data entry & analysis, clinical workflow,
                patient interaction, time management.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
