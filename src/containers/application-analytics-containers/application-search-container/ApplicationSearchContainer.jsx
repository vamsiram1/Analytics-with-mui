import ApplicationSearchHeaderIcon from "../../../assets/application-analytics/ApplicationSearchHeaderIcon";
import ApplicationSearchHeader from "../../../components/application-analytics/application-search-components/application-search-header-component/ApplicationSearchHeader";
import ApplicationSearchBar from "../../../widgets/application-search-bar-component/ApplicationSearchBar";
import styles from "../application-search-container/ApplicationSearchContainer.module.css";


const ApplicationSearchContainer = () => {

  
  return (
    <div
      id="application_search_container"
      className={styles.application_search_container}
    >
      <ApplicationSearchHeader/>

      <ApplicationSearchBar placeholderText="Search for Application" />
      
    </div>
    
  );
};

export default ApplicationSearchContainer;
