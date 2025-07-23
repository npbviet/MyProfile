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
          Hello! My name is <span>Nguyen Phan Bao Viet</span>. I am a{" "}
          <b>Fullstack Web Developer</b>.
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.imageWrapper}>
            <img src={profile} alt="Profile" className={styles.profilePic} />
          </div>

          <div className={styles.aboutDetails}>
            <p>
              <p>
                I come from a public health background and have nearly three
                years of experience working with a non-governmental
                organization. However, my strong passion for technology inspired
                me to transition into full-stack web development. Since then, I
                have been continuously sharpening both my frontend and backend
                skills. I thrive in creative, collaborative teams and am always
                eager to contribute and take on new challenges.
              </p>
              <b>Carrer Goals:</b>I am seeking an opportunity to grow as a {""}
              <b>Fullstack Web Developer</b>, where I can apply the knowledge
              and skills I have acquired, continuously improve myself, and
              successfully complete the tasks entrusted to me.
            </p>
            <ul>
              <li>
                <b>Gender</b> : Male
              </li>
              <li>
                <b>Date of birth</b> : 12/03/1996
              </li>
              <li>
                <b>Phone</b> : (+84) 903717459
              </li>
              <li>
                <b>Email</b> : npb.viet@gmail.com
              </li>
              <li>
                <b>Address</b> : Da Nang
              </li>
              <li>
                <b>GitHub</b> : https://github.com/npbviet
              </li>
            </ul>

            <Button className={styles.downloadBtn}>Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
