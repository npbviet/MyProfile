import styles from "./CmtBtn.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CmtBtn = (props) => {
  return (
    <div className={`${props.className} ${styles.cmtBtn} `}>
      <div
        className={`${styles.iconContainer} ${
          props.label === "hide" ? styles.moveLeft : styles.moveRight
        }`}
        onClick={props.onClick}
      >
        <FontAwesomeIcon icon={props.icon} className={styles.icon} />
      </div>
      <span className={styles.cmtContent}>{props.label}</span>
    </div>
  );
};

export default CmtBtn;
