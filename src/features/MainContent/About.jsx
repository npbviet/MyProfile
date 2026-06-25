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
            I come from a public health background with nearly three years of
            experience in non-governmental organizations, which built my strong
            analytical and detail-oriented mindset. Driven by a deep passion for
            technology, I transitioned into software development and built a
            solid foundation in both frontend and backend systems. With this
            technical background, I am transitioning into software testing,
            leveraging my ability to understand code, analyze edge cases, and
            integrate AI tools to ensure top-tier product quality.
          </p>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.imageWrapper}>
            <img src={profile} alt="Profile" className={styles.profilePic} />
          </div>

          <div className={styles.careerGoals}>
            <p>
              <b>Career Goals:</b> I am seeking an opportunity to thrive as a{" "}
              <b>Software QA/QC Engineer</b>, where I can leverage my full-stack
              technical background to perform rigorous testing, optimize QA
              workflows with AI, and deliver high-quality software solutions
              that align perfectly with business requirements.
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
