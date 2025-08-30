import React, { useState } from "react";
import styles from "./SearchDropdown.module.css";
import { Tab, Tabs } from "@mui/material";
import ZoneNameDropdown from "../zone-name-dropdown/ZoneNameDropdown";

const SearchDropdown = () => {
  const [selectedTab, setSelectedTab] = useState(0); 

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue); 
  };

  return (
    <div
      id="search_dropdown_wrapper"
      className={styles.search_dropdown_wrapper}
    >
      <label className={styles.dropdown_header}>Filter Category</label>
      <Tabs
        value={selectedTab} 
        onChange={handleTabChange} 
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "#F0F0F0",
          borderRadius: "8px",
          minHeight: "42px",
          borderBottom:"none",

          "& .Mui-selected": {
            backgroundColor: "#3425FF",
            color: "#FFFFFF",
            fontWeight: "500",
          },

          "& button": {
            minHeight: "5px",
            borderRadius: "5px",
            padding: "10px 1px",
            width: "10px",
            
          },

          "& .MuiTabs-list": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        <Tab label="Zone" className={styles.zone_tab} />
        <Tab label="DGM" className={styles.dgm_tab} />
        <Tab label="Campus" className={styles.campus_tab} />
      </Tabs>

      <ZoneNameDropdown />
    </div>
  );
};

export default SearchDropdown;
