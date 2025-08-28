import React from "react";
import ApplicationSearchHeaderIcon from "../../../assets/ApplicationSearchHeaderIcon";
import styles from "../application-search-header-component/ApplicationSearchHeader.module.css";
import blueLine from "../../../assets/blue-arrow-line.png"

const ApplicationSearchHeader = () => {
  return (
    <div id="search_header_wrapper" className={styles.search_header_wrapper}>
      <div id="search_header_icon_wrrapper">
        <ApplicationSearchHeaderIcon height="45" width="45"/>
      </div>
      <div>
        <h2 className={styles.application_search_header}> Application Module</h2>
        <p>
          Access and manage comprehensive student details seamlessly. View
          personalized profiles tailored to your campus.
        </p>
      </div>
      <figure>
        <img src={blueLine}/>
      </figure>
    </div>
  );
};

export default ApplicationSearchHeader;
