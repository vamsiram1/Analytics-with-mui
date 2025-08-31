import { useState } from "react";
import ZoneNameDropdown from "../zone-name-dropdown/ZoneNameDropdown";
import styles from "./SearchDropdown.module.css";

const SearchDropdown = () => {
  // keep track of active tab
  const [activeTab, setActiveTab] = useState("Zone");

  const tabs = ["Zone", "DGM", "Campus"];

  return (
    <div
      id="search_dropdown_wrapper"
      className={styles.search_dropdown_wrapper}
    >
      <label className={styles.dropdown_header}>Filter Category</label>

      <ul className={styles.all_tabs}>
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`${styles.tabs_dropdown} ${
              activeTab === tab ? styles.active_tab : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            <a className={`${styles.tab_dropdown} ${
              activeTab === tab ? styles.active_tab : ""
            }`} >{tab}</a>
          </li>
        ))}
      </ul>

      <ZoneNameDropdown />
    </div>
  );
};

export default SearchDropdown;
