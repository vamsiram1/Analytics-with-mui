import styles from "../application-nav-links-container/ApplicationNavLinksContainer.module.css";
import ApplicationNavLinks from "../../components/application-details-nav-links/applications-nav-links-component/ApplicationNavLinks";
import { Navigate, Route, Routes } from "react-router-dom";
import AnalyticsWholeContainer from "../analytics-whole-container/AnalyticsWholeContainer";



const ApplicationNavLinksContainer = () => {
  return (
    <div id="nav_links_container" className={styles.nav_links_container}>
      <ApplicationNavLinks />

      
    </div>
  );
};

export default ApplicationNavLinksContainer;
