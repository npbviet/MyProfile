import { useState, useEffect } from "react";

import Sidebar from "./features/SideBar/SideBar";
import MainContent from "./features/MainContent/MainContent";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopBtn";
import CmtBtn from "./components/CmtBtn/CmtBtn";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth < 1114
  );

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Detect first load and window resize
  useEffect(() => {
    if (window.innerWidth < 1114) {
      setIsSidebarVisible(false);
    }

    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1114);
    };

    window.addEventListener("resize", handleResize);

    const handleLoad = () => setIsLoading(false);
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="app-container">
      {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}

      <MainContent
        toggleSidebar={toggleSidebar}
        isSidebarVisible={isSidebarVisible}
      />

      {/* Lớp phủ mờ khi sidebar mở trên mobile */}
      {isMobileOrTablet && isSidebarVisible && (
        <div className="main-overlay" onClick={toggleSidebar}></div>
      )}

      <ScrollToTopButton />

      {!isSidebarVisible && (
        <CmtBtn
          className="btnSidebar"
          onClick={toggleSidebar}
          icon="fa-solid fa-angles-right"
          label="unhide"
        />
      )}
    </div>
  );
}

export default App;
