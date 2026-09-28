import profile from "../../assets/images/avatar2.jpg";
import Button from "../../components/Button/Button";

import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.aboutHeader}>
        <h2>ABOUT ME</h2>
        <p>Main informations about me</p>
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutIntro}>
          Hello! My name is <b>Nguyen Phan Bao Viet</b>. I am a{" "}
          <b>Software QA/QC Engineer</b>.
        </div>
        <div className={styles.aboutDetails}>
          <p>
            With nearly 5 years of comprehensive experience across the Software
            Testing Life Cycle (STLC), I specialize in ensuring software quality
            for high-reliability systems in Banking & Fintech, Enterprise HRM,
            and AI-powered EdTech. I bring deep expertise in both practical
            Manual Testing and scalable Automation Testing with Playwright
            (TypeScript), combined with advanced API testing, complex SQL database
            verification, and CI/CD automated pipeline integration.
          </p>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.imageWrapper}>
            <img src={profile} alt="Profile" className={styles.profilePic} />
          </div>

          <div className={styles.careerGoals}>
            <p>
              <b>Career Goals:</b> Seeking an opportunity to excel as a{" "}
              <b>Senior QC Engineer </b>, where I can leverage
              my dual-track expertise in manual testing and Playwright automation
              frameworks to eliminate defects, optimize testing cycles, and deliver
              flawless software solutions aligning with international standards.
            </p>
          </div>
          <div className={styles.personalInfo}>
            <ul>
              <li>
                <b>Gender</b>: Male
              </li>
              <li>
                <b>Phone</b>: (+84) 903717459
              </li>
              <li>
                <b>Date of birth</b>: 12/03/1996
              </li>

              <li>
                <b>Email</b>: npb.viet@gmail.com
              </li>
              <li>
                <b>Address</b>: DaNang
              </li>
              <li>
                <b>GitHub</b> :{" "}
                <a
                  href="https://github.com/npbviet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/npbviet
                </a>
              </li>
            </ul>

            <a
              href="https://drive.google.com/file/d/1rR_bSjCEhBPvUGfzPgFieLpoN7Qh29g4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={styles.downloadBtn}>Download CV</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
