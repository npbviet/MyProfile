import styles from "./SideBar.module.css";
import avatar from "../../assets/images/default-avatar.jpg";
import CmtBtn from "../../components/CmtBtn/CmtBtn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialLinks = [
  {
    icon: ["fab", "facebook-f"],
    url: "https://facebook.com/npbviet",
  },
  {
    icon: ["fab", "twitter"],
    url: "#",
  },
  {
    icon: ["fab", "github"],
    url: "https://github.com/npbviet",
  },
  {
    icon: ["fab", "linkedin-in"],
    url: "#",
  },
  {
    icon: ["fab", "instagram"],
    url: "#",
  },
];

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.avatarImg}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
      </div>
      <CmtBtn
        className={styles.btnHideSidebar}
        onClick={toggleSidebar}
        icon="fa-solid fa-angles-left"
        label="hide"
      />

      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#languagesSkills">Languages & Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <div className={styles.footerTitle}>My contact</div>
        {socialLinks.map((item, index) => {
          const hasLink = item.url && item.url !== "#";

          return (
            <a
              key={index}
              href={item.url || "#"}
              {...(hasLink
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {})}
              className={styles.iconLink}
              onClick={(e) => {
                if (!hasLink) {
                  e.preventDefault(); // chặn hành vi click nếu chưa có link
                }
              }}
            >
              <FontAwesomeIcon icon={item.icon} className={styles.icon} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
