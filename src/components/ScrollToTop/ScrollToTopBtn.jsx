import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTopBtn.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}>
      <span className={styles.label}>Home</span>
      <div className={styles.iconCircle} onClick={scrollToTop}>
        <FaArrowUp className={styles.icon} />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
