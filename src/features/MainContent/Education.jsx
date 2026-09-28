import styles from "./Education.module.css";

const Education = () => {
  return (
    <div id="education" className={styles.education}>
      <div className={styles.eduHeader}>
        <h2>Education</h2>
      </div>

      <div className={styles.eduContent}>
        <div className={styles.schoolItem}>
          <div className={styles.timeLine}>
            <h5>02/2020 - 09/2021</h5>
          </div>
          <div className={styles.schoolDetail}>
            <div className={styles.nameSchool}>
              <h4>FUNiX</h4>
            </div>
            <div className={styles.schoolContent}>
              <h5>
                - Completed the FUNiX Web Fullstack Developer Certificate
                Program.
                <br />- GPA: 8.4 /10
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
