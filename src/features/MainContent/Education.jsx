import styles from "./Education.module.css";

const Education = () => {
  return (
    <div id="education" className={styles.education}>
      <div className={styles.eduHeader}>
        <h2>Education</h2>
        <p>My academic background</p>
      </div>

      <div className={styles.eduContent}>
        <div className={styles.schoolItem}>
          <div className={styles.timeLine}>
            <h5>02/2023 - 05/2025</h5>
          </div>
          <div className={styles.schoolDetail}>
            <div className={styles.nameSchool}>
              <h4>FUNiX</h4>
            </div>
            <div className={styles.schoolContent}>
              <h5>
                - Graduated from FUNiX's Business certificate program.
                <br />- GPA: 8.4 /10
              </h5>
            </div>
          </div>
        </div>

        <div className={styles.schoolItem}>
          <div className={styles.timeLine}>
            <h5>10/2015 - 06/2019</h5>
          </div>
          <div className={styles.schoolDetail}>
            <div className={styles.nameSchool}>
              <h4>
                Bachelor - Da Nang University of Medical technology and Pharmacy
              </h4>
            </div>
            <div className={styles.schoolContent}>
              <h5>
                - Major: Public Health.
                <br />- GPA: 3.12 /4.0
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
