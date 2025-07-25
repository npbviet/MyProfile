import styles from "./SideBar.module.css";
import avatar from "../../assets/images/default-avatar.jpg";
import CmtBtn from "../../components/CmtBtn/CmtBtn";
import socialLinks from "../../data/socialLinks";
import menuLinks from "../../data/menuLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className={styles.sidebar}>
      {/* Avatar + Btn toggle*/}
      <div className={styles.avatarImg}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
      </div>

      <CmtBtn
        className={styles.btnHideSidebar}
        onClick={toggleSidebar}
        icon="fa-solid fa-angles-left"
        label="hide"
      />

      {/* Navigation links */}
      <nav>
        <ul>
          {menuLinks.map(({ label, anchor }) => (
            <li key={anchor}>
              <a href={anchor} onClick={toggleSidebar}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer with social icons */}
      <div className={styles.footer}>
        <div className={styles.footerTitle}>My contact</div>
        {socialLinks.map(({ icon, url }, index) => {
          const isActive = url && url !== "#";

          return (
            <a
              key={index}
              href={url}
              className={styles.iconLink}
              onClick={(e) => {
                if (!isActive) e.preventDefault();
              }}
              {...(isActive && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <FontAwesomeIcon icon={icon} className={styles.icon} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
